import { Router } from "express";
// import bcrypt from "bcrypt";
import config from "#lib/config.js";
import db from "#lib/db.js";
import jwt from "jsonwebtoken";
import { captchaCache } from "#lib/appCache.js";
import { checkLogin } from "#lib/checkLogin.js";


const router = Router();

// /api/v1/auth/userinfo
router.get( "/api/v1/auth/userinfo" , checkLogin , ( req , res ) => {
  res.json(req.user);
})

router.get( "/api/v1/user/login-history" , checkLogin , ( req , res ) => {

  res.json(req.user);
})


// validate jwt token and return current user + permissions and roles
router.get("/api/v1/auth/user", checkLogin , async (req, res) => {
  console.log("/api/v1/auth/user");

  res.json( req.user )

  return 

  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    const user = await db("tbl_users").where("userGuid", decoded.userGuid).first();
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({
      userGuid: user.userGuid,
      displayName: user.displayName,
      email: user.email,
      acl: user.acl,
    });
  } catch (error) {
    console.error("JWT verification error:", error);
    res.status(401).json({ error: "Invalid token" });
  }
});


export default router;
