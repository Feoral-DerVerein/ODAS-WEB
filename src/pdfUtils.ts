import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const generateODASPDF = async () => {
  const element = document.createElement('div');
  element.style.width = '800px';
  element.style.position = 'absolute';
  element.style.left = '-9999px';
  element.style.top = '0';
  element.style.backgroundColor = 'white';
  element.style.color = 'black';
  element.style.fontFamily = 'sans-serif';
  element.style.padding = '0';
  element.style.margin = '0';

  const pages = [
    // Page 1
    `
    <div style="padding: 60px; height: 1131px; position: relative; box-sizing: border-box; display: flex; flex-direction: column;">
      <div style="text-align: center; margin-bottom: 40px;">
        <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px;">ODAS <span style="font-weight: normal; color: #666;">by Negentropy Labs</span></div>
        <h1 style="font-size: 24px; font-style: italic; font-family: serif; margin-bottom: 10px; color: #333;">La plataforma que convierte el desperdicio alimentario en cumplimiento</h1>
        <h2 style="font-size: 20px; font-style: italic; font-family: serif; color: #333;">legal, impacto social y eficiencia operativa.</h2>
      </div>

      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background-color: #eee; border: 1px solid #eee; margin-bottom: 60px;">
        <div style="background-color: #f9f9f7; padding: 20px; text-align: center;">
          <div style="font-size: 32px; font-weight: bold; color: #d98e2b;">€289M</div>
        </div>
        <div style="background-color: #f9f9f7; padding: 20px; text-align: center;">
          <div style="font-size: 32px; font-weight: bold; color: #d98e2b;">1/3</div>
          <div style="font-size: 10px; color: #666; margin-top: 5px;">de los alimentos se desperdician</div>
        </div>
        <div style="background-color: #f9f9f7; padding: 20px; text-align: center;">
          <div style="font-size: 32px; font-weight: bold; color: #d98e2b;">€500K</div>
          <div style="font-size: 10px; color: #666; margin-top: 5px;">sanción máxima Ley 1/2025</div>
        </div>
        <div style="background-color: #f9f9f7; padding: 20px; text-align: center;">
          <div style="font-size: 32px; font-weight: bold; color: #d98e2b;">2 abr</div>
          <div style="font-size: 10px; color: #666; margin-top: 5px;">fecha límite cumplimiento</div>
        </div>
      </div>

      <div style="border-top: 2px solid #d98e2b; padding-top: 20px; margin-bottom: 40px;">
        <div style="color: #d98e2b; font-weight: bold; font-size: 14px; margin-bottom: 20px;">01 · EL PROBLEMA</div>
        <h3 style="font-size: 22px; font-weight: bold; margin-bottom: 20px;">El coste oculto del desperdicio alimentario</h3>
        <p style="font-size: 14px; line-height: 1.6; color: #333; margin-bottom: 20px;">
          Cada año, millones de toneladas de alimentos perfectamente aptos para el consumo terminan en la basura. Para las empresas del sector alimentario, esto no es solo un problema ético o medioambiental: desde el 2 de abril de 2026, es también un riesgo legal y económico de primer orden.
        </p>
        <p style="font-size: 14px; line-height: 1.6; color: #333; margin-bottom: 30px;">
          La Ley 1/2025 de Prevención de las Pérdidas y el Desperdicio Alimentario obliga a todos los operadores de la cadena alimentaria a documentar, gestionar y reducir activamente su desperdicio. El incumplimiento puede conllevar sanciones que van desde los 2.001 € hasta los 500.000 €, según la gravedad de la infracción.
        </p>
        
        <div style="font-style: italic; font-family: serif; font-size: 18px; text-align: center; padding: 0 40px; color: #444; margin-bottom: 40px;">
          "La ausencia de un Plan de Prevención documentado es la infracción más frecuente y la que mayor exposición legal genera para el establecimiento."
        </div>

        <div style="background-color: #f0f0ed; padding: 20px; margin-bottom: 10px; font-size: 13px; line-height: 1.5;">
          Sin documentación, sin protección. La mayoría de los negocios ya donan o gestionan excedentes, pero sin el registro adecuado esa actividad no cuenta ante una inspección.
        </div>
        <div style="background-color: #f0f0ed; padding: 20px; margin-bottom: 10px; font-size: 13px; line-height: 1.5;">
          Los sistemas actuales no están diseñados para esto. Los ERPs y TPVs registran ventas, no desperdicio. El seguimiento manual en Excel no tiene validez legal ni trazabilidad auditada.
        </div>
        <div style="background-color: #f0f0ed; padding: 20px; font-size: 13px; line-height: 1.5;">
          El tiempo apremia. El plazo de cumplimiento ya está activo. Cada día sin sistema es un día de exposición legal para el negocio.
        </div>
      </div>
    </div>
    `,
    // Page 2
    `
    <div style="padding: 60px; height: 1131px; position: relative; box-sizing: border-box; display: flex; flex-direction: column;">
      <div style="border-top: 2px solid #d98e2b; padding-top: 20px; margin-bottom: 40px;">
        <div style="color: #d98e2b; font-weight: bold; font-size: 14px; margin-bottom: 20px;">02 · LA SOLUCIÓN</div>
        <h3 style="font-size: 22px; font-weight: bold; margin-bottom: 20px;">Qué es ODAS</h3>
        <p style="font-size: 14px; line-height: 1.6; color: #333; margin-bottom: 20px;">
          ODAS es la primera plataforma integral de gestión de desperdicio alimentario diseñada específicamente para el cumplimiento de la Ley 1/2025 en España. Combina inteligencia artificial, documentación legal automatizada y formación certificada en una sola solución accesible para cualquier operador alimentario, desde una panadería de barrio hasta una cadena de supermercados.
        </p>
        <p style="font-size: 14px; line-height: 1.6; color: #333; margin-bottom: 30px;">
          ODAS no es un registro pasivo. Es un sistema activo que anticipa el desperdicio, documenta cada movimiento con validez legal y convierte el cumplimiento normativo en una ventaja competitiva para el negocio.
        </p>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 60px;">
          <div style="background-color: #1a2e24; color: white; padding: 20px; text-align: center;">
            <div style="font-size: 12px; font-weight: bold; margin-bottom: 5px;">PREVENCIÓN</div>
            <div style="font-size: 14px;">Inteligencia Artificial</div>
          </div>
          <div style="background-color: #b3542d; color: white; padding: 20px; text-align: center;">
            <div style="font-size: 12px; font-weight: bold; margin-bottom: 5px;">DOCUMENTACIÓN</div>
            <div style="font-size: 14px;">Cumplimiento Legal</div>
          </div>
          <div style="background-color: #7a6a24; color: white; padding: 20px; text-align: center;">
            <div style="font-size: 12px; font-weight: bold; margin-bottom: 5px;">FORMACIÓN</div>
            <div style="font-size: 14px;">Certificada FUNDAE</div>
          </div>
        </div>
      </div>

      <div style="border-top: 2px solid #d98e2b; padding-top: 20px;">
        <div style="color: #d98e2b; font-weight: bold; font-size: 14px; margin-bottom: 20px;">03 · CÓMO AYUDAMOS</div>
        <h3 style="font-size: 22px; font-weight: bold; margin-bottom: 20px;">Una solución para cada necesidad</h3>
        
        <div style="display: flex; background-color: #f5f5f2; margin-bottom: 10px;">
          <div style="width: 60px; background-color: #1a2e24; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px;">01</div>
          <div style="padding: 20px; flex: 1;">
            <div style="font-weight: bold; font-size: 14px; margin-bottom: 5px;">Predicción de excedentes</div>
            <div style="font-size: 12px; line-height: 1.4; color: #444;">ODAS analiza el histórico de ventas y consumo del establecimiento para anticipar qué productos van a sobrar y cuándo. Así el negocio ajusta sus pedidos antes de que el desperdicio ocurra, no después.</div>
          </div>
        </div>

        <div style="display: flex; background-color: #f5f5f2; margin-bottom: 10px;">
          <div style="width: 60px; background-color: #b3542d; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px;">02</div>
          <div style="padding: 20px; flex: 1;">
            <div style="font-weight: bold; font-size: 14px; margin-bottom: 5px;">Plan de Prevención automatizado</div>
            <div style="font-size: 12px; line-height: 1.4; color: #444;">Con unas pocas preguntas sobre el negocio, ODAS genera automáticamente el Plan de Prevención de Desperdicio Alimentario personalizado y con validez legal, listo para firmar y presentar ante cualquier inspección.</div>
          </div>
        </div>

        <div style="display: flex; background-color: #f5f5f2; margin-bottom: 10px;">
          <div style="width: 60px; background-color: #1a2e24; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px;">03</div>
          <div style="padding: 20px; flex: 1;">
            <div style="font-weight: bold; font-size: 14px; margin-bottom: 5px;">Albaranes de entrega con validez legal</div>
            <div style="font-size: 12px; line-height: 1.4; color: #444;">Cada donación o entrega de excedentes queda documentada con un albarán generado por ODAS conforme al artículo 7 de la Ley 1/2025: datos del productor, transportista y receptor, con trazabilidad completa y archivo durante 5 años.</div>
          </div>
        </div>

        <div style="display: flex; background-color: #f5f5f2;">
          <div style="width: 60px; background-color: #b3542d; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px;">04</div>
          <div style="padding: 20px; flex: 1;">
            <div style="font-weight: bold; font-size: 14px; margin-bottom: 5px;">Registro y reportes de cumplimiento</div>
            <div style="font-size: 12px; line-height: 1.4; color: #444;">ODAS mantiene un historial auditado de todas las acciones de gestión de excedentes del establecimiento, con reportes mensuales listos para presentar en caso de inspección o auditoría.</div>
          </div>
        </div>
      </div>
    </div>
    `,
    // Page 3
    `
    <div style="padding: 60px; height: 1131px; position: relative; box-sizing: border-box; display: flex; flex-direction: column;">
      <div style="display: flex; background-color: #f5f5f2; margin-bottom: 10px;">
        <div style="width: 60px; background-color: #1a2e24; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px;">05</div>
        <div style="padding: 20px; flex: 1;">
          <div style="font-weight: bold; font-size: 14px; margin-bottom: 5px;">Formación certificada para el equipo</div>
          <div style="font-size: 12px; line-height: 1.4; color: #444;">A través de NegentropyLabs, ODAS ofrece cursos bonificados por FUNDAE sobre la Ley 1/2025 para el personal del establecimiento, cubriendo la obligación legal de formación interna sin coste adicional para la empresa.</div>
        </div>
      </div>

      <div style="display: flex; background-color: #f5f5f2; margin-bottom: 60px;">
        <div style="width: 60px; background-color: #b3542d; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px;">06</div>
        <div style="padding: 20px; flex: 1;">
          <div style="font-weight: bold; font-size: 14px; margin-bottom: 5px;">Acompañamiento continuo</div>
          <div style="font-size: 12px; line-height: 1.4; color: #444;">Cada cliente ODAS cuenta con soporte especializado para resolver dudas legales, actualizar el plan ante cambios normativos y garantizar el cumplimiento continuo a lo largo del tiempo.</div>
        </div>
      </div>

      <div style="border-top: 2px solid #d98e2b; padding-top: 20px; margin-bottom: 40px;">
        <div style="color: #d98e2b; font-weight: bold; font-size: 14px; margin-bottom: 20px;">04 · PARA QUIÉN ES ODAS</div>
        <h3 style="font-size: 22px; font-weight: bold; margin-bottom: 20px;">Cualquier operador de la cadena alimentaria</h3>
        <p style="font-size: 14px; line-height: 1.6; color: #333; margin-bottom: 20px;">
          La Ley 1/2025 afecta a todos los eslabones de la cadena: productores, distribuidores, grandes superficies, hostelería, catering, restauración colectiva y comercio minorista. ODAS está diseñado para adaptarse a cualquier tamaño y tipo de operador.
        </p>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background-color: #eee; border: 1px solid #eee;">
          <div style="background-color: #f9f9f7; padding: 15px; text-align: center; font-size: 12px; font-weight: bold;">Supermercados y tiendas de alimentación</div>
          <div style="background-color: #f9f9f7; padding: 15px; text-align: center; font-size: 12px; font-weight: bold;">Restaurantes, bares y cafeterías</div>
          <div style="background-color: #f9f9f7; padding: 15px; text-align: center; font-size: 12px; font-weight: bold;">Panaderías y obraderos</div>
          <div style="background-color: #f9f9f7; padding: 15px; text-align: center; font-size: 12px; font-weight: bold;">Hoteles y empresas de catering</div>
          <div style="background-color: #f9f9f7; padding: 15px; text-align: center; font-size: 12px; font-weight: bold;">Mercados y mercadillos</div>
          <div style="background-color: #f9f9f7; padding: 15px; text-align: center; font-size: 12px; font-weight: bold;">Distribuidores y centrales de compra</div>
        </div>
      </div>

      <div style="border-top: 2px solid #d98e2b; padding-top: 20px;">
        <div style="color: #d98e2b; font-weight: bold; font-size: 14px; margin-bottom: 20px;">05 · IMPACTO Y BENEFICIOS</div>
        <h3 style="font-size: 22px; font-weight: bold; margin-bottom: 20px;">Más que cumplimiento: una ventaja competitiva</h3>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background-color: #eee; border: 1px solid #eee;">
          <div style="background-color: #f9f9f7; padding: 20px;">
            <div style="font-weight: bold; font-size: 14px; margin-bottom: 10px;">Ahorro económico directo</div>
            <div style="font-size: 11px; line-height: 1.4; color: #444;">Reducir el desperdicio entre un 20% y un 50% se traduce en menos compras innecesarias, menos merma y mayor eficiencia en la gestión de inventario.</div>
          </div>
          <div style="background-color: #f9f9f7; padding: 20px;">
            <div style="font-weight: bold; font-size: 14px; margin-bottom: 10px;">Reputación y diferenciación</div>
            <div style="font-size: 11px; line-height: 1.4; color: #444;">Los consumidores valoran cada vez más el compromiso sostenible. ODAS genera evidencia real y verificable de ese compromiso para comunicarlo con credibilidad.</div>
          </div>
          <div style="background-color: #f9f9f7; padding: 20px;">
            <div style="font-weight: bold; font-size: 14px; margin-bottom: 10px;">Protección legal total</div>
            <div style="font-size: 11px; line-height: 1.4; color: #444;">Plan de Prevención, albaranes y registros siempre actualizados. Ante cualquier inspección, el negocio está cubierto con documentación de primer nivel.</div>
          </div>
          <div style="background-color: #f9f9f7; padding: 20px;">
            <div style="font-weight: bold; font-size: 14px; margin-bottom: 10px;">Impacto social medible</div>
            <div style="font-size: 11px; line-height: 1.4; color: #444;">Cada kilo donado a través de ODAS tiene un receptor identificado y un impacto social documentado, alineado con los ODS de Naciones Unidas.</div>
          </div>
        </div>
      </div>
    </div>
    `,
    // Page 4
    `
    <div style="padding: 60px; height: 1131px; position: relative; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center;">
      <div style="background-color: #1a2e24; color: white; padding: 60px; text-align: center; border-radius: 10px;">
        <h2 style="font-size: 28px; font-weight: bold; margin-bottom: 20px;">¿Tu negocio ya cumple con la Ley 1/2025?</h2>
        <p style="font-size: 16px; margin-bottom: 40px; opacity: 0.8;">El plazo ya está activo. Contáctanos hoy y te ayudamos a estar en regla en menos de 48 horas.</p>
        
        <div style="display: flex; justify-content: center; gap: 40px; font-size: 14px;">
          <a href="https://www.negentropylabs.com" style="color: #d98e2b; text-decoration: none; font-weight: bold;">www.negentropylabs.com</a>
          <a href="mailto:hello@negentropylabs.com" style="color: #d98e2b; text-decoration: none; font-weight: bold;">hello@negentropylabs.com</a>
        </div>
      </div>
      
      <div style="position: absolute; bottom: 60px; left: 60px; right: 60px; display: flex; justify-content: space-between; font-size: 10px; color: #999; border-top: 1px solid #eee; pt: 20px;">
        <div>ODAS · Negentropy Labs · Lleida, España · www.negentropylabs.com</div>
        <div>Documento elaborado conforme a Ley 1/2025, de 22 de enero (BOE núm. 20)</div>
      </div>
    </div>
    `
  ];

  const pdf = new jsPDF('p', 'pt', 'a4');
  
  for (let i = 0; i < pages.length; i++) {
    element.innerHTML = pages[i];
    document.body.appendChild(element);
    
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: 'white'
    });
    
    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    
    if (i > 0) pdf.addPage();
    pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
    
    document.body.removeChild(element);
  }

  pdf.save('ODAS_Info_NegentropyLabs.pdf');
};
