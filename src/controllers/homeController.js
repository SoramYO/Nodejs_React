import db from '../models/index.js';
import CURDService from '../services/CRUDService.js';

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
let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}
let postCRUD = async (req, res) => {
    let message = await CURDService.createNewUser(req.body);
    console.log(message);
    return res.send('post crud');
}
let displayGetCRUD = async (req, res) => {
    let data = await CURDService.getAllUsers();
    console.log('-------------------------------')
    console.log(data);
    console.log('-------------------------------')

    return res.render('displayGetCRUD.ejs', { dataTable: data })
}
module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD
}