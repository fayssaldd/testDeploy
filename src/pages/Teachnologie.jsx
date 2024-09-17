import React from 'react'
import CardTeach from './CardTeach'
import html from '../assets/teachnologie/html.png'
import css from '../assets/teachnologie/css.png'
import bootstrap from '../assets/teachnologie/bootstrap.png'
import tailwind from '../assets/teachnologie/tailwind.png'
import javascript from '../assets/teachnologie/javascript.png'
import php from '../assets/teachnologie/php.png'
import mySql from '../assets/teachnologie/mySql.png'
import react from '../assets/teachnologie/react.png'
import shadcn from '../assets/teachnologie/shadcn.png'
import laravel from '../assets/teachnologie/laravel.png'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
 
import { Card, CardContent } from "@/components/ui/card"
import { m } from 'framer-motion'
export default function Teachnologie() {
  const lien = "../assets/teachnologie/"
  // const images =  [html, css, bootstrap, tailwind, javascript, php, mySql, react, shadcn, laravel]
  const technologies = {
    html: {
      nom: html,
      description: "HyperText Markup Language, utilisé pour structurer le contenu des pages web."
    },
    css: {
      nom: css,
      description: "Cascading Style Sheets, utilisé pour styliser et mettre en forme les pages web."
    },
    bootstrap: {
      nom: bootstrap,
      description: "Un framework CSS qui facilite la création de sites web réactifs et modernes."
    },
    tailwind: {
      nom: tailwind,
      description: "Un framework CSS utilitaire qui permet de créer rapidement des interfaces stylées avec des classes pré-définies."
    },
    javascript: {
      nom: javascript,
      description: "Un langage de programmation pour rendre les pages web interactives et dynamiques."
    },
    php: {
      nom: php,
      description: "Un langage de script côté serveur utilisé pour développer des applications web dynamiques."
    },
    mySql: {
      nom: mySql,
      description: "Un système de gestion de base de données relationnel open-source utilisé pour stocker et gérer des données."
    },
    react: {
      nom: react,
      description: "Une bibliothèque JavaScript pour la création d'interfaces utilisateur interactives, développée par Facebook."
    },
    shadcn: {
      nom: shadcn,
      description: "Une collection de composants UI prête à l'emploi pour React, souvent utilisée avec Tailwind CSS."
    },
    laravel: {
      nom: laravel,
      description: "Un framework PHP robuste qui simplifie le développement d'applications web avec une syntaxe élégante."
    }
  };
  
  console.log(technologies);
  
  return (
    <div id='technologie' className='flex flex-col justify-center items-center'>
        <div>
            <p className=' text-center text-3xl underline mb-4'>Teachnologies And Framworks</p>
        </div>
        {/* <div className='flex flex-wrap justify-center w-full '>
            <CardTeach titre={"html5"} description={"description"} image={html} />
            <CardTeach titre={"css3"} description={"description"} image={css} />
            <CardTeach titre={"bootstrap"} description={"description"} image={bootstrap} />
            <CardTeach titre={"tailwind"} description={"description"} image={tailwind} />
            <CardTeach titre={"javascript"} description={"description"} image={javascript} />
            <CardTeach titre={"php"} description={"description"} image={php} />
            <CardTeach titre={"mySql"} description={"description"} image={mySql} />
            <CardTeach titre={"react"} description={"description"} image={react} />
            <CardTeach titre={"shadcn"} description={"description"} image={shadcn} />
            <CardTeach titre={"laravel"} description={"description"} image={laravel} />
        </div> */}
        <Carousel className="w-full  max-sm:w-96  max-w-4xl">
          <CarouselContent className="-ml-1">
            {
              Object.entries(technologies).map(([key, value]) => (
                <CarouselItem  className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                    <CardTeach titre={key} description={value.description} image={value.nom} />
                </div>
                </CarouselItem>
              ))
            }
            {/* {images.map((im, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                <CardTeach titre={"laravel"} description={"description"} image={im} />
                  
                </div>
              </CarouselItem>
            ))} */}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
    </div>
  )
}
