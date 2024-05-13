import express from 'express';
import homeController from '../controllers/homeController';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);
    router.get('/edit-crud', homeController.displayEditCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);
    router.post('/put-crud', homeController.putCRUD);

    //rest api


    return app.use("/", router);
};

module.exports = initWebRoutes;