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
    let data = await CURDService.getAllUsers();
    return res.render('displayGetCRUD.ejs', { dataTable: data })
}
let displayGetCRUD = async (req, res) => {
    let data = await CURDService.getAllUsers();
    console.log('-------------------------------')
    console.log(data);
    console.log('-------------------------------')

    return res.render('displayGetCRUD.ejs', { dataTable: data })
}
let displayEditCRUD = async (req, res) => {
    let userId = req.query.id;
    let userData = await CURDService.getUserInfoById(userId);
    console.log('-------------------------------')
    console.log(userData);
    console.log('-------------------------------')


    return res.render('editCRUD.ejs', {
        user: userData
    })
}
let deleteCRUD = async (req, res) => {
    let userId = req.query.id;
    let deleteUser = await CURDService.deleteUserById(userId);
    return res.render('displayGetCRUD.ejs', { dataTable: deleteUser })
}
const putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CURDService.updateUserData(data);
    return res.render('displayGetCRUD.ejs', { dataTable: allUsers })
};

module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    displayEditCRUD: displayEditCRUD,
    deleteCRUD: deleteCRUD,
    putCRUD: putCRUD
}