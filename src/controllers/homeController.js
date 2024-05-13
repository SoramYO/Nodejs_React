import db from '../models/index.js';

let getHomePage = async (req, res) => {
    try {

        let data = await db.User.findAll();
        console.log('-------------------------------')
        console.log(data);
        console.log('-------------------------------')
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }

}

module.exports = {
    getHomePage: getHomePage,
}