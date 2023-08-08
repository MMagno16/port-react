import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCards from "../Components/CertificateCards/CertificateCards";
import dp900 from "../Assets/dp900.png";
import ai900 from "../Assets/ai900.png";
import Particle from "../Components/Particles/Particle";
import pl100 from "../Assets/pl100.png";
import ai102 from "../Assets/ai102.png";
import sc900 from "../Assets/sc900.png";
import ssc900 from "../Assets/ssc900.png";
import microsoftcomm from "../Assets/microsoftcomm.png";
import microsoftcommm from "../Assets/microsoftcommm.png";
import dthinking from "../Assets/dthinking.png";
import decola from "../Assets/decola.png";
import devOps from "../Assets/devOps.png";
import algoritmos from "../Assets/algoritmos.png";
import az900 from "../Assets/az900.png";
import ideavanade from "../Assets/ideavanade.png";
import responsive from "../Assets/responsive.png";
import metodologia from "../Assets/metologia.png";
import sharepoint from "../Assets/sharepoint.png";
import conquista from "../Assets/conquista.jpeg";



function Certificate() {
  return (
    <Container fluid className="certificate-section">
      <Particle />
      <Container>
        <h1 className="certificate-heading">
          My recent <strong className="purple"> achievements</strong>
        </h1>
        <p style={{ color: "white" }}></p>

        

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={6} className="certificate-card">
            <CertificateCards
              imgPath={sc900}
              title="SC-900"
              description="Exame SC-900: Fundamentos de segurança, conformidade e identidade da Microsoft. Este exame é direcionado àqueles que desejam se familiarizar com os fundamentos de SCI (segurança, conformidade e identidade) em serviços Microsoft relacionados e baseados em nuvem."
              link="https://www.credly.com/badges/3cf90008-dfef-48a4-b128-c5ad34a59d39/linked_in_profile"
            />
          </Col>

          <Col md={6} className="certificate-card">
            <CertificateCards
              imgPath={ai900}
              title="AI-900"
              description="Exame AI-900: Este exame é uma oportunidade para demonstrar conhecimento sobre os conceitos de ML (machine learning) e IA (inteligência artificial) e serviços relacionados do Microsoft Azure."
              link="https://www.credly.com/badges/e7a896db-3a29-4c9d-b653-c51df6e4b6f5"
            />
          </Col>

          <Col md={6} className="certificate-card">
            <CertificateCards
              imgPath={dp900}
              title="DP-900"
              description="Exame DP-900: Fundamentos de dados do Microsoft Azure. Este exame é uma oportunidade para demonstrar o conhecimento dos principais conceitos de dados e serviços de dados relacionados do Microsoft Azure."
              link="https://www.credly.com/badges/8ec2ff72-1cae-413a-a456-39450407ff6c/linked_in_profile"
            />
          </Col>

          <Col md={6} className="certificate-card">
            <CertificateCards
              imgPath={pl100}
              title="PL-100"
              description=" Certificado interno Avanade - Exame PL-100: Criador de aplicativos da Microsoft Power Platform. O candidato a este exame prevê e cria soluções de negócios para simplificar e automatizar tarefas e processos para si mesmo e para a equipe."
              link="https://www.linkedin.com/posts/marianna-magno_treinamento-pl-100-microsoft-power-platform-activity-7051271846851162112-ICUt?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={6} className="certificate-card">
            <CertificateCards
              imgPath={ai102}
              title="AI-102"
              description=" Certificado interno Avanade - O curso AI-102: Como projetar e implementar uma solução de IA do Microsoft Azure destina-se a desenvolvedores de software que querem criar aplicativos infundidos com IA que usam os Serviços Cognitivos do Azure, o Azure Cognitive Search e o Microsoft Bot Framework."
              link="https://www.linkedin.com/posts/marianna-magno_treinamento-ai-102-azure-ai-engineer-activity-7054583932628983808-JoqA?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={6} className="certificate-card">
            <CertificateCards
              imgPath={ssc900}
              title="SC-900"
              description=" Certificado interno KaSolution - Exame SC-900: Fundamentos de segurança, conformidade e identidade da Microsoft. Este exame é direcionado àqueles que desejam se familiarizar com os fundamentos de SCI (segurança, conformidade e identidade) em serviços Microsoft relacionados e baseados em nuvem."
              link="https://www.linkedin.com/posts/marianna-magno_sc-900-activity-7053471091188465664-xGr6?utm_source=share&utm_medium=member_desktop"
            />
          </Col>
          <Col md={6} className="certificate-card">
            <CertificateCards
              imgPath={az900}
              title="AZ-900"
              description=" Certificado interno KaSolution - Exame AZ-900: Fundamentos do Microsoft Azure
              Este exame mede sua capacidade de descrever o seguinte: conceitos da nuvem; arquitetura e serviços do Azure e gerenciamento e governança do Azure. O preço é baseado no país ou na região em que o exame é realizado."
              link="https://www.linkedin.com/posts/marianna-magno_intensivo-microsoft-azure-fundamentals-activity-7020726649205702656-MT__?utm_source=share&utm_medium=member_desktop"
            />
          </Col>
          <Col md={6} className="certificate-card">
            <CertificateCards
              imgPath={algoritmos}
              title="Algorítmos"
              description=" Certificado de conclusão do Treinamento FIAP e Avanade - Algorítmos - Aprenda a programar!"
              link="https://www.linkedin.com/posts/marianna-magno_sc-900-activity-7053471091188465664-xGr6?utm_source=share&utm_medium=member_desktop"
            />
          </Col>
          <Col md={6} className="certificate-card">
            <CertificateCards
              imgPath={decola}
              title="DecolaTech #3"
              description=" Certificado de conclusão do Treinamento FIAP e Avanade - DecolaTech #3 edição!"
              link="https://www.linkedin.com/posts/marianna-magno_certificado-de-conclus%C3%A3o-decola-tech-activity-7037063128974553089-dxUi?utm_source=share&utm_medium=member_desktop"
            />
          </Col>
          <Col md={6} className="certificate-card">
            <CertificateCards
              imgPath={dthinking}
              title="Design Thinking - Fiap & Avanade"
              description=" Certificado de conclusão do treinamento FIAP e Avanade - Design Thinking."
              link="https://www.linkedin.com/posts/marianna-magno_mais-um-curso-da-fiap-conclu%C3%ADdo-activity-7008917307548667904-LX8P?utm_source=share&utm_medium=member_desktop"
            />
          </Col>
          <Col md={6} className="certificate-card">
            <CertificateCards
              imgPath={devOps}
              title="DevOps & Agile Culture"
              description=" Certificado de conclusão FIAP  - DevOps & Agile Culture."
              link="https://www.linkedin.com/posts/marianna-magno_devops-agile-activity-7017171184635031553-O13z?utm_source=share&utm_medium=member_desktop"
            />
          </Col>
          <Col md={6} className="certificate-card">
            <CertificateCards
              imgPath={responsive}
              title="Responsive Web Development."
              description=" Certificado de conclusão do treinamento FIAP e Avanade - Responsive Web Development. "
              link="https://www.linkedin.com/posts/marianna-magno_avanade-fiap-certificacao-activity-6980888771483348992-JZVN?utm_source=share&utm_medium=member_desktop"
            />
          </Col>
          <Col md={6} className="certificate-card">
            <CertificateCards
              imgPath={metodologia}
              title="Metodologias Ágeis."
              description=" Certificado de conclusão do treinamento FIAP e Avanade - Metodologias Ágeis ."
              link="https://www.linkedin.com/posts/marianna-magno_certificado-de-conclus%C3%A3o-metodologias-%C3%A1geis-activity-6981225986201661440-WuIF?utm_source=share&utm_medium=member_desktop"
            />
          </Col>
          <Col md={6} className="certificate-card">
            <CertificateCards
              imgPath={microsoftcommm}
              title="Community Microsoft BR."
              description=" Certificado de Participação - Microsoft Ignite BR."
              link="https://www.linkedin.com/posts/marianna-magno_avante-microsoft-ignite-activity-6999138479414611968-0lxh?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={6} className="certificate-card">
            <CertificateCards
              imgPath={microsoftcomm}
              title="Community Microsoft BR."
              description=" Certificado de Participação - Community Microsoft BR."
              link="https://www.linkedin.com/posts/marianna-magno_sc-900-activity-7053471091188465664-xGr6?utm_source=share&utm_medium=member_desktop"
            />
          </Col>
          
          <Col md={6} className="certificate-card">
            <CertificateCards
              imgPath={ideavanade}
              title="Certificado de Conclusão - Consulting Excellence - Fundamentals."
              description=" Ministrado pela Avanade e IDEA9 | Learning Experience, com foco em habilidades comportamentais."
              link="https://www.linkedin.com/posts/marianna-magno_certificado-de-conclus%C3%A3o-activity-6978731176492445697-H2v0?utm_source=share&utm_medium=member_desktop"
            />
          </Col>
          
          <Col md={6} className="certificate-card">
            <CertificateCards
              imgPath={sharepoint}
              title="Sharepoint Development."
              description=" Certificado de conclusão - Fundação Bradesco - SharePoint "
              link="https://www.linkedin.com/posts/marianna-magno_microsoft-development-sharepoint-activity-7050906940591226880-UDKY?utm_source=share&utm_medium=member_desktop"
            />
          </Col>
          <Col md={6} className="certificate-card">
            <CertificateCards
              imgPath={conquista}
              title="Destaque da Semana"
              description=" Projeto interno da Avanade - Jornada de Capacitação. "
              link="https://www.linkedin.com/posts/marianna-magno_oportunidade-avanade-tech-activity-7052752403208577024-WA1V?utm_source=share&utm_medium=member_desktop"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}
export default Certificate;
