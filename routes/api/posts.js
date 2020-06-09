const express = require('express');
const router = express.Router();
const passport = require('passport');

const Post = require('../../models/Post');
// const ValidatePost = require('../../validation/post');