import { useNavigate, useRouteError } from 'react-router-dom'
import MainNavigation from '../layout/MainNavigation'
import Footer from '../layout/Footer'
import { setDocTitle } from '../utils/utility'
import Main from '../components/PageUI/Main'
import ProjectorImage from '../assets/projector.webp'

const HTTP_ERRORS = {
  400: {
    title: 'Solicitud incorrecta',
    description: 'La solicitud no se pudo entender o tiene una sintaxis incorrecta.'
  },
  401: {
    title: 'No autorizado',
    description: 'Se requiere autenticación válida para acceder a este recurso.'
  },
  402: {
    title: 'Pago requerido',
    description: 'Es necesario realizar un pago para proceder con la solicitud.'
  },
  403: {
    title: 'Prohibido',
    description: 'No tienes permiso para acceder a este recurso.'
  },
  404: {
    title: 'No encontrado',
    description: 'El recurso solicitado no pudo ser localizado en el servidor.'
  },
  405: {
    title: 'Método no permitido',
    description: 'El método HTTP utilizado no está permitido para este recurso.'
  },
  406: {
    title: 'No aceptable',
    description: 'El servidor no puede generar una respuesta aceptable según las preferencias enviadas en la solicitud.'
  },
  407: {
    title: 'Autenticación de proxy requerida',
    description: 'Es necesario autenticarse en el proxy antes de acceder al recurso.'
  },
  408: {
    title: 'Tiempo de espera agotado',
    description: 'El servidor tardó demasiado en recibir la solicitud.'
  },
  409: {
    title: 'Conflicto',
    description: 'La solicitud no pudo ser completada debido a un conflicto en el estado del recurso.'
  },
  410: {
    title: 'El recurso ya no está disponible',
    description: 'Este recurso ha sido eliminado permanentemente y no se espera que esté disponible nuevamente.'
  },
  411: {
    title: 'Longitud requerida',
    description: 'Es necesario especificar la longitud del contenido de la solicitud.'
  },
  412: {
    title: 'Error de precondición',
    description: 'La precondición en la solicitud no se cumplió.'
  },
  413: {
    title: 'Carga demasiado grande',
    description: 'El servidor no puede procesar la solicitud porque el cuerpo es demasiado grande.'
  },
  414: {
    title: 'URI demasiado larga',
    description: 'La URI solicitada es demasiado larga para ser procesada por el servidor.'
  },
  415: {
    title: 'Tipo de medio no soportado',
    description: 'El tipo de medio de los datos enviados no es soportado por el servidor.'
  },
  416: {
    title: 'Rango no satisfactorio',
    description: 'El servidor no puede proporcionar el rango solicitado del recurso.'
  },
  417: {
    title: 'Falló la expectativa',
    description: 'El servidor no pudo cumplir con el requisito de la cabecera Expect de la solicitud.'
  },
  418: {
    title: 'Soy una tetera',
    description: 'El servidor se rehúsa a preparar café porque es una tetera.'
  },
  421: {
    title: 'Solicitud dirigida a un servidor inapropiado',
    description: 'El servidor al que se dirigió la solicitud no puede responder.'
  },
  422: {
    title: 'Entidad no procesable',
    description: 'El servidor entiende la solicitud pero no puede procesarla debido a errores semánticos.'
  },
  423: {
    title: 'Bloqueado',
    description: 'El recurso solicitado está bloqueado y no puede ser accedido.'
  },
  424: {
    title: 'Fallo de dependencia',
    description: 'La solicitud falló debido a una falla en una solicitud previa.'
  },
  425: {
    title: 'Demasiado temprano para procesar',
    description: 'El servidor se niega a procesar la solicitud porque puede ser repetida.'
  },
  426: {
    title: 'Actualización requerida',
    description: 'El servidor requiere una actualización a un protocolo superior para procesar la solicitud.'
  },
  428: {
    title: 'Precondición requerida',
    description: 'El servidor requiere que la solicitud cumpla con ciertas condiciones antes de ser procesada.'
  },
  429: {
    title: 'Demasiadas solicitudes',
    description: 'El cliente ha enviado demasiadas solicitudes en un tiempo corto.'
  },
  431: {
    title: 'Campos de cabecera de solicitud demasiado grandes',
    description: 'Las cabeceras de la solicitud son demasiado grandes para ser procesadas.'
  },
  451: {
    title: 'No disponible por razones legales',
    description: 'El contenido ha sido bloqueado por motivos legales y no está disponible.'
  },
  500: {
    title: 'Error interno del servidor',
    description: 'El servidor encontró un error inesperado que le impide completar la solicitud.'
  },
  501: {
    title: 'No implementado',
    description: 'El servidor no soporta la funcionalidad requerida para completar la solicitud.'
  },
  502: {
    title: 'Bad Gateway',
    description: 'El servidor, actuando como una puerta de enlace o proxy, recibió una respuesta inválida desde el servidor ascendente.'
  },
  503: {
    title: 'Servicio no disponible',
    description: 'El servidor no está disponible temporalmente, generalmente debido a mantenimiento o sobrecarga.'
  },
  504: {
    title: 'Tiempo de espera de la puerta de enlace',
    description: 'El servidor, actuando como una puerta de enlace o proxy, no recibió una respuesta a tiempo del servidor ascendente.'
  },
  505: {
    title: 'Versión HTTP no soportada',
    description: 'El servidor no soporta la versión del protocolo HTTP usada en la solicitud.'
  },
  506: {
    title: 'La variante también negocia',
    description: 'El servidor ha encontrado una configuración circular de negociación de contenido.'
  },
  507: {
    title: 'Insuficiente almacenamiento',
    description: 'El servidor no puede guardar la representación necesaria para completar la solicitud.'
  },
  508: {
    title: 'Bucle detectado',
    description: 'El servidor detectó un bucle infinito al procesar la solicitud.'
  },
  510: {
    title: 'No extendido',
    description: 'Se requiere más extensiones para que el servidor pueda cumplir con la solicitud.'
  },
  511: {
    title: 'Autenticación de red requerida',
    description: 'Se necesita autenticación adicional para acceder a la red y completar la solicitud.'
  }
}

export default function ErrorPage () {
  const error = useRouteError()

  const navigate = useNavigate()

  setDocTitle(`Error ${error?.status || ''}`)

  return (
    <>
      <MainNavigation />
      <Main
        center={
          <section className='grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-12'>
            <div className='md:ml-auto m-0'>
              <h1 className='text-5xl font-bold'>Vaya! :(</h1>
              <p className='text-lg font-semibold mt-2'>
                Lamentamos informarle de que ha ocurrido un error inesperado.
              </p>
              {error?.status &&
                <div className='flex flex-col mt-4'>
                  <p className='font-semibold'>{error.status}: {HTTP_ERRORS?.[error.status]?.title}</p>
                  <p>{HTTP_ERRORS?.[error.status]?.description}</p>
                </div>}
              <button className='rounded py-2 px-4 mt-6 font-semibold group border-2 border-black dark:border-white' onClick={() => navigate(-1)}>
                <span className='group-hover:scale-110 transition-all inline-block'>&larr; Volver</span>
              </button>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
              <svg xmlns='http://www.w3.org/2000/svg' version='1.1' id='svg1' viewBox='-58.69 -58.88 118.09 117.62' className='w-full max-w-96 aspect-square mx-auto'>
                <defs>
                  <pattern id='image' patternUnits='userSpaceOnUse' height='100%' width='100%' patternTransform='translate(-58.69, -58.88)'>
                    <image x='0' y='0' height='100%' width='100%' xlinkHref={ProjectorImage} />
                  </pattern>
                </defs>
                <path id='path3' strokeWidth={0.025324} fill='url(#image)' d='m -43.759424,-38.872859 c 19.7014,-9.150288 23.09229,-20.882482 49.0001602,-19.204387 9.4242608,0.610425 19.9917498,-0.347635 28.7606018,-0.745976 34.71833,-1.577147 23.53412,42.163202 24.10611,52.1856906 2.80272,49.1103074 -4.34274,51.6213554 -16.87778,60.1864764 -11.02254,7.531643 -18.585562,5.873032 -50.1997353,1.261212 -19.4391487,-2.835749 -32.8808837,-5.530475 -38.4121657,-10.122505 -7.773628,-6.45361 -12.82593,-21.399911 -10.61119,-40.2911854 1.185151,-10.109096 -7.300245,-33.2677766 14.233999,-43.2693256 z' />
              </svg>
            </div>
          </section>
      }
      />
      <Footer />
    </>
  )
}
