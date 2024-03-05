//amparo crear roles se ejecuta al iniciar el servidor
import Role from '../models/roleModel.js';

(async () => {
    try {
        const role = await Role.find()
        if (role.length > 0) return;
        const values = await Promise.all([
            new Role({ name: 'Estudiante', description: 'Estudiante role' }).save(),
            new Role({ name: 'Docente', description: 'Docente role' }).save(),
        ])
        console.log(values);

    } catch (error) {
        console.log(error);
    }
})()