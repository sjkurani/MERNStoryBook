const express = require('express')
const router = express.Router()
const passport = require('passport')

// @desc google auth
// @route GET /auth/google
router.get('/google',passport.authenticate('google', { scope: ['profile']}))

// @desc google auth callback
// @route GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', {failureRedirect : '/'}),
    (req,res) => {
        res.redirect('/dashboard')
    }
    )


// @desc Logout user
// @route GET /auth/logout
router.get('/logout',(req,res) => {
    req.logout(),
    res.redirect('/')
})
module.exports = router