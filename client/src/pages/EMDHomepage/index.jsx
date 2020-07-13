import React from 'react';

import Header from '../components/Header';
import FirstSection from '../components/FirstSection';
import GoalsSection from '../components/GoalsSection';
import CourseObjective from '../components/CourseObjective';
import ForWhoContainer from '../components/ForWhoContainer';
import ModulesSection from '../components/ModulesSection';
import FAQSection from '../components/FAQSection';
import CTA from '../components/CTA';
import AlgumaDuvidaSection from '../components/AlgumaDuvidaSection';
import MobileMatriculese from '../components/MobileMatriculese';
import Footer from '../components/Footer';

import './styles.css';
import './responsive.css';

export default function EMDHomepage(){
  const firstSectionTitle = () => <p>Empreendedorismo<br></br>Digital</p>

  const modulesSectionContent = () => (
    <ol>
          <li><strong>Comece seu negócio</strong>
            <ul>
              <li>
                <strong>Curso Empreendedorismo:</strong>
                <p>da ideia ao plano de negócios</p>
              </li>

              <li>
                <strong>Curso Empreendedorismo:</strong>
                <p>Abrindo sua empresa do jeito certo</p>
              </li>

              <li>
                <strong>Podcast:</strong>
                <p>Startups, Venture Capital e Investimentos</p>
              </li>

              <li>
                <strong>Podcast:</strong>
                <p>Agilidade</p>
              </li>

            </ul>
          </li>

          <li><strong>Business Model Canvas</strong>
            <ul>
              <li>
                <strong>Curso Business Model Canvas parte 1:</strong>
                <p>Um modelo poderoso para o seu negócio</p>
              </li>

              <li>
                <strong>Curso Business Model Canvas parte 2:</strong>
                <p>Avance no seu modelo de negócios</p>
              </li>

              <li>
                <strong>Podcast MVP:</strong>
                <p>produto mínimo viável</p>
              </li>

            </ul>
          </li>

          <li>
            <strong>Desenvolvendo o Marketing</strong>
            <ul>
              <li>
                <strong>Curso Branding:</strong>
                <p>Criando uma marca forte</p>
              </li>

              <li>
                <strong>Podcast:</strong>
                <p>Como criar uma marca forte e fazer os clientes se apaixonarem por ela</p>
              </li>

              <li>
                <strong>Curso estratégias de marketing:</strong>
                <p>Lançamento de produto digital</p>
              </li>

              <li>
                <strong>Vídeo:</strong>
                <p>Marketing Digital</p>
              </li>

            </ul>
          </li>
          
          <li>
            <strong>Divulgando sua marca com Mídia Paga</strong>
            <ul>
              <li>
                <strong>Curso facebook ADS:</strong>
                <p>Crie anúncios que geram resultados</p>
              </li>
              
              <li>
                <strong>Curso Linkedin ADS:</strong>
                <p>novos clientes com anúncios otimizados e e-mails patrocinados</p>
              </li>
              
              <li>
                <strong>Post Linkedin ADS:</strong>
                <p>Descubra se vale a pena utilizar a plataforma para divulgar seu negócio</p>
              </li>
              
            </ul>
          </li>

          <li>
            <strong>Lean Inbound</strong>
            <ul>
              <li>
                <strong>Curso lean Inbound Parte 1:</strong>
                <p>Fundamentos de marketing e vendas para novos negócios</p>
              </li>
              
              <li>
                <strong>Curso lean Inbound Parte 2:</strong>
                <p>Práticas de validação, marketing e vendas</p>
              </li>
              
              <li>
                <strong>Podcast:</strong>
                <p>Inbound marketing</p>
              </li>

              <li>
                <strong>Podcast: </strong>
                <p>Startups, marketing e resultados</p>
              </li>
              
            </ul>
          </li>

        </ol>
  )
  return (
    <div className="GAGHomepage">
      <Header />
      <FirstSection 
        title={firstSectionTitle()}
        formId="3ef178e0-d45b-40d2-80ae-2d69242499c4"
        linkMatricula="https://cursos.alura.com.br/compra/candido-mendes-empreendedorismo-digital"
      />
      <GoalsSection 
        cargaHoraria="90 horas"
        inicio="Agosto/2020"
        modalidade="100% on-line"
        investimento="R$ 900,00"
      />
      
      <CourseObjective text="O curso tem como objetivo ensinar e tangibilizar todas as etapas pré, durante e pós implantação de negócio, esclarecendo ao empreendedor todo conhecimento sobre as questões burocráticas,mercadológicas, legais, financeiras, gerenciais, comerciais, tecnológicas e promocionais atreladas ao mercado digital. Possibilitando assim uma maior exploração do mercado Digital, fortalecendo novas e melhoradas práticas."/>

      <ForWhoContainer text="Este curso é destinado para profissionais e gestores que desejam abrir um novo negócio ou profissionais que sentem a necessidade de modificar e aperfeiçoar processos digitais dentro de sua empresa."/>

      <ModulesSection
        title="Módulos"
        content={modulesSectionContent()}
      />
      {/* <Teachers /> */}
      <FAQSection certification="Empreendedorismo Digital"/>
      <CTA href="https://cursos.alura.com.br/compra/candido-mendes-empreendedorismo-digital"/>
      <AlgumaDuvidaSection />
      <MobileMatriculese />
      <Footer />
    </div>
  )
}

