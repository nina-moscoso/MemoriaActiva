export const getRole = async (req, res) => {

    try {
        res.status(200).json("users Found");
    } catch (error) {
        res.status(500).json("unable to get users");
    }
}