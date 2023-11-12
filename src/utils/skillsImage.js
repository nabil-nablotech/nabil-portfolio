import bootstrap from '../assets/svg/skills/bootstrap.svg'
import css from '../assets/svg/skills/css.svg'
import django from '../assets/svg/skills/django.svg'
import docker from '../assets/svg/skills/docker.svg'
import git from '../assets/svg/skills/git.svg'
import graphql from '../assets/svg/skills/graphql.svg'
import html from '../assets/svg/skills/html.svg'
import illustrator from '../assets/svg/skills/illustrator.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import materialui from '../assets/svg/skills/materialui.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import nextJS from '../assets/svg/skills/nextJS.svg'
import photoshop from '../assets/svg/skills/photoshop.svg'
import postgresql from '../assets/svg/skills/postgresql.svg'
import python from '../assets/svg/skills/python.svg'
import react from '../assets/svg/skills/react.svg'
import strapi from '../assets/svg/skills/strapi.svg'
import tailwind from '../assets/svg/skills/tailwind.svg'
import typescript from '../assets/svg/skills/typescript.svg'
import ubuntu from '../assets/svg/skills/ubuntu.svg'
import wordpress from '../assets/svg/skills/wordpress.svg'
import figma from '../assets/svg/skills/figma.svg'
import nestjs from '../assets/svg/skills/nestjs.svg'
import nodejs from '../assets/svg/skills/nodejs.svg'
import antdesign from '../assets/svg/skills/antdesign.svg'
import sass from '../assets/svg/skills/sass.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'ubuntu':
            return ubuntu;
        case 'node js':
            return nodejs;
        case 'nest js':
            return nestjs;
        case 'ant design':
            return antdesign;
        case 'sass':
            return sass;
        case 'photoshop':
            return photoshop;
        case 'docker':
            return docker;
        case 'illustrator':
            return illustrator;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'react':
            return react;
        case 'typescript':
            return typescript;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'tailwind':
            return tailwind;
        case 'python':
            return python;
        case 'django':
            return django;
        case 'git':
            return git;
        case 'graphql':
            return graphql;
        case 'materialui':
            return materialui;
        case 'strapi':
            return strapi;
        case 'wordpress':
            return wordpress;
        case 'figma':
            return figma;
        default:
            break;
    }
}
