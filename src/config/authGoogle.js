
var router = express.Router();
const dotenv = require('dotenv');
dotenv.config();
const { OAuth2Client } = require('google-auth-library');

async function getUserData(access_token) {
    const respone = await fetch('https://www.googleapis.com/oauth2/v3/userinfo?alt=json&access_token=' + access_token);
    const data = await respone.json();
    console.log(data);
}

router.get('/oauth', async function (req, res, next) {
    const code = req.query.code;
    try {
        const redirectUrl = 'http://localhost:8080/oauth';
        const OAuth2Client = new OAuth2Client(
            process.env.GOOGLE_CLIENT_ID,
            process.env.GOOGLE_CLIENT_SECRET,
            redirectUrl
        );
        const res = await OAuth2Client.getToken(code);
        await OAuth2Client.setCredentials(res.tokens);
        consol.log("Token acquires")
        const user = OAuth2Client.credentials;
        console.log(user.access_token);
        await getUserData(user.access_token);
    } catch (error) {
        console.log(error);
    }
});
