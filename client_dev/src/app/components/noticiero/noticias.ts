import { Injectable } from '@angular/core';
@Injectable()
export class Noticias {
    public noticias = [
        {
            id: '0',
            img: ['n1.png', 'n1.2.png' , 'n1.3.png', 'n1.4.png'],
            date: '09/05/2019',
            title: 'PRESIDENTE DE LA CORTE SUPREMA INAUGURÓ 7° REUNIÓN DE LA ' +
                  'COMISIÓN IBEROAMERICANA DE MECANISMOS ALTERNATIVOS DE ' +
                  'RESOLUCIÓN DE CONFLICTOS Y TTD ',
             body: 'PRESIDENTE DE LA CORTE SUPREMA INAUGURÓ 7° REUNIÓN DE LA COMISIÓN ' +
                  'IBEROAMERICANA DE MECANISMOS ALTERNATIVOS DE RESOLUCIÓN DE ' +
                  'CONFLICTOS Y TTD. Con la presencia del presidente de la Corte ' +
                  'Suprema, Haroldo Brito, y el ministro de Justicia y Derechos ' +
                  'Humanos, Hernán Larraín, se  dio por inaugurada la séptima reunión '  +
                  'de la Comisión permanente de Mecanismos Alternativos y ' +
                  'Restaurativos de Resolución de Conflictos y Programa de Tribunales ' +
                  'de Tratamiento de Drogas (Marc TTD), instancia que se desarrollará' +
                  'el 9 y 10 mayo en Santiago.' +
                  'Jueces y comisionados de Perú, Ecuador, España, Paraguay, Nicaragua,' +
                  'Guatemala y Costa Rica -junto a Chile como país anfitrión- se reúnen' +
                  'para abordar diversas metodologías de trabajo jurisdiccional que ' +
                  'puedan ser un aporte para los sistemas de justicia iberoamericanos, ' +
                  'en un encuentro que busca obtener conclusiones  y documentos para ser ' +
                  'presentados en la próxima cumbre judicial iberoamericana que reúne a ' +
                  'los 23 países integrantes. ' +
                  'La ceremonia inaugural contó con la exposición del  ministro  y presidente ' +
                  'de la comisión Marc TTD, Roberto Contreras  y la asistencia de la presidenta  ' +
                  'de la Corte de Apelaciones de San Miguel, Liliana Mera; el  defensor nacional, ' +
                  'Andrés Mahnke; el fiscal regional metropolitano norte, Xavier Armendáriz;  ' +
                  'magistrados y representantes  de la Fundación Paz Ciudadana y del  Servicio ' +
                  'Nacional para la Prevención y Rehabilitación del Consumo de Drogas y Alcohol ' +
                  '(Senda). ' +
                  'El ministro Contreras explicó que “en esta reunión fundamentalmente ' +
                  'estudiaremos  el trabajo en materia de justicia juvenil restaurativa, ' +
                  'con experiencias relativas a la mediación que se aplican en Chile: a ' +
                  'través de la mediación penal y en el ámbito del modelo de Centros de ' +
                  'Justicia en lo que se domina sistema de multipuertas, es decir que ante ' +
                  'determinado conflicto jurisdiccional no sólo exista el camino del proceso ' +
                  'tradicional que  concluye en una sentencia, sino que existan muchas otras ' +
                  'puertas que puedan abordar más intensamente el conflicto  abordando todas ' +
                  'sus complejidades para dar una solución que sea eficiente”.' +
                  '“Lo que está haciendo hoy el sistema de justicia es resolver por la vía' +
                  'de sentencias definitivas más o menos el 30% de los casos que ingresan en ' +
                  'todas las materias y, por lo tanto, existe un 70% de los casos que no se ' +
                  'resuelven por sentencia definitiva y a ello queremos apuntar buscando' +
                  'mecanismos que den solución a esos conflictos de forma asertiva, original,' +
                  'en forma integradora como una opción o posibilidad más dentro del sistema ' +
                  'de justicia”, agregó. ' +
                  'En tanto el ministro de Justicia y Derechos Humanos, Hernan Larraín, comentó' +
                  'que, “estamos impulsando una importante reforma legal e institucional al ' +
                  'sistema de reinserción social juvenil  que incluye una actualización de ' +
                  'temas procesales muy relevantes y la modernización  de la institucionalidad ' +
                  'encargada de la resocialización de los adolescentes e infractores de ley que' +
                  'actualmente está radicada en el Sename, servicio que se va a transformar  en' +
                  'dos, uno de protección y otro con los infractores juveniles, espacio en el ' +
                  'que habrá un importante esfuerzo de reinserción. Esta reforma incluye un ' +
                  'importante componente de justicia restaurativa en el que modelo sitúa a la' +
                  'mediación como  la metodología de trabajo  y orienta los objetivos de ' +
                  'intervención  tanto a la responsabilidad de los infractores como a la ' +
                  'reparación efectiva del daño a la víctima”.' +
                  'Finalmente, el presidente de la Corte Suprema, Haroldo Brito, señaló que ' +
                  '“el Poder Judicial de Chile tiene la convicción de que el intercambio de ideas, ' +
                  'experiencias y la cooperación entre las judicaturas de nuestra región son un ' +
                  'elemento fundamental para el desarrollo de nuestras instituciones en beneficio ' +
                  'de las personas que requieren de la acción jurisdiccional. Actividades como ' +
                  'estas resultan necesarias para garantizar el goce  del derecho de acceso a ' +
                  'la justicia, acceso que se ha entendido de forma tradicional como un derecho' +
                  'vinculado a la actividad jurisdiccional y particularmente a la posibilidad ' +
                  'de acceder a un proceso judicial desarrollado por un tribunal. Las políticas ' +
                  'en materia de justicia debiesen tender a ampliar el efecto de los mecanismos ' +
                  'de resolución de conflictos sin hacerlos competir de forma tal que la vía ' +
                  'judicial no desaparezca  de vista ya sea porque las partes hayan presentado ' +
                  'un caso a mediación  ni  que los tribunales dejen de fomentar el uso de los ' +
                  'mecanismos alternativos”, concluyó.',
            footer: 'Con la presencia del presidente de la Corte Suprema, ' +
                    'Haroldo Brito, y el ministro de Justicia y Derechos Humanos,' +
                    'Hernán Larraín, se dio por inaugurada la séptima reunión de ' +
                    'la Comisión permanente de Mecanismos Alternativos y Restaurativos ' +
                    'de Resolución de Conflictos y Programa de Tribunales de Tratamiento ' +
                    'de Drogas (Marc TTD), instancia que se desarrollará el 9 y 10 mayo en ' +
                    'Santiago.',
                    images: {
                        img_first: {
                            img_title: 'n1.png'
                        },
                    }
        },
        {
            id: '1',
            img: [ 'n2.png', 'n2.1.png', 'n2.2.png', 'n2.3.png'],
            date: '02/06/2019',
            title: 'V Congreso Iberoamericano de Justicia Terapéutica La Plata 2, 3 y 4 de julio' +
                   ' de 2019',
            body: 'Los días 2, 3 y 4 de julio de 2019 se realizara el  V congreso de justicia ' +
                  'terapéutica en donde algunos de los ejes temáticos serán: ' +
                  'EJES TEMÁTICOS' +
                  'Sistema de justicia: leyes, procedimientos, roles legales. ' +
                  'La Justicia Terapéutica aplicada al Derecho Penal, de Familia y Penal ' +
                  'Juvenil. ' +
                  'Conflictos sociales y jurídicos: resoluciones alternativas y ' +
                  'aprendizajes. ' +
                  'Familia y Género: problemáticas actuales. ' +
                  'Juzgados de tratamiento especializado. ' +
                  'Objetivos: ' +
                  'Este congreso esta dirigido a profesionales de diferentes disciplinas ' +
                  'relacionadas con la ley, operadores del sistema justicia, integrantes de ' +
                  'los poderes del Estado, instituciones academias y organizaciones sociales ' ,
            footer: 'El día 4 de julio a las 16:00 horas “Nuevos paradigmas: El efecto TTD”. ' +
                    'Roberto Contreras Olivares Ministro Coordinador del Programa de Tribunales ' +
                    'de Tratamiento de Drogas del Poder Judicial de Chile. Presidente de la Comisión ' +
                    'Marc-TTD de la Cumbre Judicial Iberoamericana. Ministro de la Corte de Apelaciones ' +
                    'de San Miguel, Santiago de Chile (Chile). ' ,
                    images: {
                        img1: 'n2.1.png',
                        img2: '2.2.png',
                        img3: '2.3.png',
                        img_first: {
                            img_title: 'n2.png'
                        },
                    }
        },
        {
            id: '2',
            img: [ 'n3.png'],
            date: '17/12/2018',
            title: 'MINISTRO ROBERTO CONTRERAS ENCABEZA JORNADA DE CAPACITACIÓN Y SENSIBILIZACIÓN CON ' +
                   'ENFOQUE DE TRIBUNALES DE TRATAMIENTO DE DROGAS',
            body: 'MINISTRO ROBERTO CONTRERAS ENCABEZA JORNADA DE CAPACITACIÓN Y SENSIBILIZACIÓN CON ENFOQUE DE TRIBUNALES ' +
                  'DE TRATAMIENTO DE DROGAS. Jueces de Garantía, fiscales, defensores y profesionales del Servicio Nacional ' +
                  'para la Prevención y Rehabilitación del Consumo de Drogas y Alcohol (SENDA) participaron en una jornada ' +
                  'de sensibilización con enfoque de Tribunales de Tratamiento de Droga, que fue encabezada por el ministro' +
                  'de la Corte de Apelaciones de San Miguel Roberto Contreras.' +
                  'La actividad  fue organizada por la Unidad de seguimiento de los TTD dependiente de la Dirección de ' +
                  'Desarrollo Institucional del Poder Judicial y contó con la ponencia del ministro Contreras – coordinador' +
                  'a nivel nacional del programa-  quien realizó una presentación de la realidad nacional e internacional, ' +
                  'su importancia y el desafío para incorporar a más tribunales al programa. ' +
                  'A continuación el magistrado Claudio Ortega, del Juzgado de Garantía de San Bernardo, presentó su ' +
                  'experiencia y buenas prácticas respecto al ingreso de adultos y adolescentes al programa de Tribunales de ' +
                  'Tratamiento de Drogas. También expusieron Pablo Aranda, defensor especializado del área juvenil de la ' +
                  'Defensoría Penal Pública;  Álvaro Correa, psicólogo del Ministerio Púbico;  Marcela Lara Orellana Psicóloga ' +
                  'del SENDA;  Cecilia Salinas en representación del  SENAME ; Ulda Figueroa, abogado de la Fundación Paz ' +
                  'Ciudadana y Lorena Rebolledo, abogada asesora de la Unidad Especializada de Drogas de la Fiscalía Nacional. ' +
                  '“Se organizó esta actividad en el marco del convenio interinstitucional firmado por el Poder Judicial en ' +
                  '2012 en el que se comprometió a fortalecer e implementar el programa TTD. Lo que hicimos en esta oportunidad ' +
                  'fue una capacitación conjunta con todas las instituciones que intervienen en el programa  -Ministerio Público, ' +
                  'Defensoría Penal Pública, Senda, Sename y Fundación Paz Ciudadana- en el cual se dio a conocer el  diseño del ' +
                  'programa, la experiencia a lo largo de todos estos años desde el 2004 y además se destacaron los hitos ' +
                  'fundamentales para su buen funcionamiento con la finalidad de incorporar a más jueces, fiscales, defensores ' +
                  'y profesionales de la salud al programa”, señaló el ministro Contreras. ' +
                  '“Tuvimos una gran convocatoria y un éxito total, quedamos muy conformes y se cumplieron largamente los ' +
                  'objetivos del encuentro”, concluyó. ',
            footer: 'Jueces de Garantía, fiscales, defensores y profesionales del Servicio Nacional para la Prevención y ' +
                    'Rehabilitación del Consumo de Drogas y Alcohol (SENDA) participaron en una jornada de sensibilización ' +
                    'con enfoque de Tribunales de Tratamiento de Droga, que fue encabezada por el ministro de la Corte de ' +
                    'Apelaciones de San Miguel Roberto Contreras.',
                    images: {
                        img1: 'n3.png',
                        img2: '',
                        img3: '',
                        img_first: {
                            img_title: 'n3.png'
                        },
                    }
        },
        {
            id: '3',
            date: '14/05/2019',
            img: [ 'n4.png', 'n4.1.png', 'n4.2.png', 'n4.3.png'],
            title: 'CONCLUYE VII REUNIÓN DE LA COMISIÓN IBEROAMERICANA DE MECANISMOS ALTERNATIVOS DE ' +
                   'RESOLUCIÓN DE CONFLICTOS Y TTD',
            body: 'CONCLUYE VII REUNIÓN DE LA COMISIÓN IBEROAMERICANA DE MECANISMOS ALTERNATIVOS DE RESOLUCIÓN DE ' +
               'CONFLICTOS Y TTD. Con importantes acuerdos concluyó la séptima reunión de la Comisión Permanente ' +
               'de Mecanismos Alternativos y Restaurativos de Resolución de Conflictos y Programa de Tribunales ' +
               'de Tratamiento de Drogas (MARC TTD),  que reunió  a jueces y comisionados de Perú, Ecuador, ' +
               'España, Paraguay, Nicaragua, Guatemala, Costa Rica y de Chile, como país anfitrión, ' +
               'desarrollada en Santiago.' +
               'Rafael Segura Bonilla, magistrado de la sala de casación penal y coordinador del programa de ' +
               'justicia restaurativa de Costa Rica, comentó que “nosotros estuvimos como observadores  en ' +
               'este encuentro de la Comisión MARC TTD y me parece que fue muy productiva en razón de que ' +
               'se tomaron varios acuerdos principalmente de promover la convención o decálogo de justicia ' +
               'restaurativa en materia penal juvenil. Y en eso hubo un consenso por parte de los países ' +
               'participantes, lo que es un gran adelanto”.' +
               'En tanto el ministro  y presidente  de la comisión Marc TTD, Roberto Contreras explicó que ' +
               '“La reunión fue muy fructífera y obtuvimos  muy buenos resultados porque se lograron ' +
               'importantes acuerdos sobre los productos en los que va a trabajar y avanzar la comisión, ' +
               'los que serán  presentados en la próxima edición de la Cumbre Judicial Iberoamericana  ' +
               'de 2020.  Estos dicen relación con diseñar un mapa o atlas iberoamericano actualizado ' +
               'con respecto a los diversos programas que operan en los países integrantes de la comisión; ' +
               'establecer una hoja de ruta interinstitucional de la comisión en materia de justicia ' +
               'juvenil restaurativa y  formular recomendaciones de justicia restaurativa iberoamericana ' +
               'desde la perspectiva ciudadana y participativa, con enfoque de género”.' +
               'La séptima reunión de la comisión Marc TTD fue organizada por su secretaría técnica a cargo ' +
               'de Chile, la que es integrada por la abogada Georgette Urra, jefa de la  Unidad Seguimiento ' +
               'de los Tribunales de Tratamiento de Drogas; la abogada administrativa Andrea Sanhueza y el ' +
               'ingeniero informático Rodrigo Jeldes, dependientes de la Dirección de Desarrollo ' +
               'Institucional del Poder Judicial de Chile.',
            footer: 'La séptima reunión de la comisión Marc TTD fue organizada por su secretaría técnica ' +
                    'a cargo de Chile, la que es integrada por la abogada Georgette Urra, jefa de la  ' +
                    'Unidad Seguimiento de los Tribunales de Tratamiento de Drogas; la abogada ' +
                    'administrativa Andrea Sanhueza y el ingeniero informático Rodrigo Jeldes, ' +
                    'dependientes de la Dirección de Desarrollo Institucional del Poder Judicial de Chile.',
                    images: {
                        img1: 'n4.1.png',
                        img2: 'n4.2.png',
                        img3: 'n4.3.png',
                        img_first: {
                            img_title: 'n4.png'
                        },
                    }
        },
        {
            id: '4',
            date: '28/09/2018',
            img: [ 'n5.png', 'n5.1.png', 'n5.2.png', 'n5.3.png'],
            title: 'MINISTRO ROBERTO CONTRERAS DICTA CONFERENCIA EN CONGRESO SOBRE JUSTICIA RESTAURATIVA REALIZADO EN ESPAÑA',
            body: 'El ministro de la Corte de Apelaciones de San Miguel Roberto Contreras Olivares dictó una conferencia en  ' +
                  'el marco del “Congreso internacional de justicia restaurativa: una justicia para las víctimas”,  ' +
                  'efectuado en Madrid, España, en su calidad de presidente de la Comisión Iberoamericana de Mecanismos  ' +
                  'Alternativos y Restaurativos de Resolución de Conflictos y Tribunales de Tratamiento de Droga (MARC TTD). ' +
                  'La ponencia –realizada el pasado 21 de septiembre- fue organizada por el Programa para la cohesión social ' +
                  'en América Latina (Euro social) y la Unión Europea, dentro de una mesa de trabajo integrada por expertos  ' +
                  'de Ecuador, Guatemala y Panamá, congreso en el que además participaron representantes de Francia,  ' +
                  'Inglaterra y España. ' +
                  '“Mi participación tuvo por objeto exponer el trabajo que hemos ido realizando al interior de la comisión ' +
                  'con dos productos que fueron aprobados en la última edición de la Cumbre Judicial Iberoamericana en abril ' +
                  'de este año. Estos productos son el decálogo sobre justicia juvenil restaurativa y la declaración sobre  ' +
                  'justicia ciudadana y participativa, los que tienen por objeto buscar instancia tempranas y eficaces para  ' +
                  'la solución de los conflictos considerando la participación de los propios intervinientes y la comunidad  ' +
                  'donde se producen”, señaló el ministro Contreras. ',
            footer: 'El ministro de la Corte de Apelaciones de San Miguel Roberto Contreras Olivares dictó una conferencia ' +
                    'en el marco del “Congreso internacional de justicia restaurativa: una justicia para las víctimas”, ' +
                    'efectuado en Madrid, España, en su calidad de presidente de la Comisión Iberoamericana de Mecanismos ' +
                    'Alternativos y Restaurativos de Resolución de Conflictos y Tribunales de Tratamiento de Droga ' +
                    '(MARC TTD).',
                    images: {
                        img1: 'n5.1.png',
                        img2: 'n5.2.png',
                        img3: 'n5.3.png',
                        img_first: {
                            img_title: 'n5.png'
                        },
                    }
        },
        {
            id: '5',
            img: [ 'n6.png'],
            date: '26/09/2018',
            title: 'Gobierno presentará proyecto para crear en todo el país los Tribunales de Tratamiento de Drogas y Alcohol',
            body: 'Gobierno presentará proyecto para crear en todo el país los Tribunales de Tratamiento de Drogas y ' +
            'AlcoholMinistro de Justicia, Hernán Larraín, anunció en un coloquio organizado por el Poder ' +
            'Judicial que la iniciativa se presentará a mediados de 2019, para que ingresen todos los imputados' +
            'que lo requieran.' +
            'SANTIAGO.- El ministro de Justicia, Hernán Larraín, anunció que se enviará al Congreso una ' +
            'iniciativa legal a mediados de 2019, a raíz de los buenos resultados que ha mostrado el programa ' +
            'de los Tribunales de Tratamiento de Drogas y Alcohol (TTD), en la disminución de la reincidencia. ' +
            'El principal propósito del programa TTD es disminuir la probabilidad de reincidencia delictual a ' +
            'través de la derivación a rehabilitación de los infractores adultos y juveniles que presentan un ' +
            'consumo problemático de drogas o alcohol. El Gobierno, según explicó Larraín, decidió establecer ' +
            'un régimen legal para que el acceso a este programa llegue a todo el país y para que cuente con ' +
            'una institucionalidad formal en el ordenamiento jurídico. “No solamente todos los tribunales ' +
            'deben estar preparados y capacitados con los mismos procedimientos para adoptarlos, sino también, ' +
            'por ejemplo, los sistemas de rehabilitación”, dijo. La baja tasa de reincidencia delictual fue ' +
            'considerada por el Ejecutivo para convertir en ley el programa. “Para nuestro gobierno, la ' +
            'reinserción es un tema central. Por demasiados años, todo nuestro sistema, sobre todo en el ' +
            'ámbito de Gendarmería, ha estado concentrado en el esfuerzo sobre la custodia y seguridad ' +
            'interna, y no hemos hecho el mismo esfuerzo sobre la proyección de esa persona cuando se ' +
            'reinserta en la sociedad”, afirmó el secretario de Estado.',
            footer: 'La Dirección de Métodos Alternativos de solución de conflictos realizó la clausura ' +
                    'del Programa de Especialización en Métodos Alternativos de Solución de Conflictos.',
                    images: {
                        img1: 'n6.png',
                        img2: 'n6.png',
                        img3: '',
                        img_first: {
                            img_title: 'n6.png'
                        },
                    }
        },
        {
            id: '6',
            img: [ 'n7.png'],
            date: '01/03/2018',
            title: 'Guatemala – Programa de Especialización en Métodos Alternativos de Solución de Conflictos.',
            body: 'La Dirección de Métodos Alternativos de solución de conflictos realizó la clausura del Programa ' +
                    'de Especialización en Métodos Alternativos de Solución de Conflictos. ' +
                    'Este es un esfuerzo de la Corte Suprema de Justicia y el Organismo  ' +
                    'Judicial para implementar medidas de resolución de conflictos  ' +
                    'utilizando la mediación como un vehículo para alcanzar la mediación  ' +
                    'mutua y resolución de conflictos. Con la finalidad de fortalecer  ' +
                    'el funcionamiento de los centros de mediación de 14 departamentos  ' +
                    'que funcionan desde hace 20 años se consideró realizar un programa  ' +
                    'de capacitación a los mediadores de esta importante Dirección,  ' +
                    'la cual tiene como meta proveer de un servicio profesional,  ' +
                    'integral y de calidad a sus usuarios. Con el apoyo de la  ' +
                    'Escuela de Estudios Judiciales, la Organización de Estados  ' +
                    'Americanos (OEA) y el programa Interamericano de facilitadores  ' +
                    'judiciales se creó este curso que culminó hoy, con la entrega de  ' +
                    'diplomas para cada participante. Durante su intervención,  ' +
                    'el Presidente del Organismo Judicial y de la Corte Suprema de  ' +
                    'Justicia José Antonio Pineda Barales reiteró su compromiso con la  ' +
                    'sociedad guatemalteca. ' ,
            footer: 'fuente: http://www.oj.gob.gt/',
                    images: {
                        img1: 'n7.png',
                        img2: 'n7.png',
                        img3: '',
                        img_first: {
                            img_title: 'n7.png'
                        },
                    }
        }
    ];
}

