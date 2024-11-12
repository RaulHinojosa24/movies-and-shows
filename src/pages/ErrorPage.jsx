import { useAsyncError, useNavigate, useRouteError } from 'react-router-dom'
import MainNavigation from '../layout/MainNavigation'
import Footer from '../layout/Footer'
import { setDocTitle } from '../utils/utility'
import Main from '../components/PageUI/Main'
import ProjectorImage from '../assets/projector.webp'

const HTTP_ERRORS = {
  400: {
    title: 'Bad Request',
    description: 'The request could not be understood or has incorrect syntax.'
  },
  401: {
    title: 'Unauthorized',
    description: 'Valid authentication is required to access this resource.'
  },
  402: {
    title: 'Payment Required',
    description: 'Payment is required to proceed with the request.'
  },
  403: {
    title: 'Forbidden',
    description: 'You do not have permission to access this resource.'
  },
  404: {
    title: 'Not Found',
    description: 'The requested resource could not be found on the server.'
  },
  405: {
    title: 'Method Not Allowed',
    description: 'The HTTP method used is not allowed for this resource.'
  },
  406: {
    title: 'Not Acceptable',
    description: 'The server cannot generate a response that meets the request’s preferences.'
  },
  407: {
    title: 'Proxy Authentication Required',
    description: 'Authentication with the proxy is required before accessing the resource.'
  },
  408: {
    title: 'Request Timeout',
    description: 'The server took too long to receive the request.'
  },
  409: {
    title: 'Conflict',
    description: 'The request could not be completed due to a conflict in the resource’s state.'
  },
  410: {
    title: 'Gone',
    description: 'This resource has been permanently removed and is no longer available.'
  },
  411: {
    title: 'Length Required',
    description: 'The content length of the request must be specified.'
  },
  412: {
    title: 'Precondition Failed',
    description: 'The precondition in the request was not met.'
  },
  413: {
    title: 'Payload Too Large',
    description: 'The server cannot process the request because the payload is too large.'
  },
  414: {
    title: 'URI Too Long',
    description: 'The requested URI is too long for the server to process.'
  },
  415: {
    title: 'Unsupported Media Type',
    description: 'The media type of the provided data is not supported by the server.'
  },
  416: {
    title: 'Range Not Satisfiable',
    description: 'The server cannot provide the requested range of the resource.'
  },
  417: {
    title: 'Expectation Failed',
    description: 'The server could not fulfill the requirement of the Expect header in the request.'
  },
  418: {
    title: 'I\'m a teapot',
    description: 'The server refuses to brew coffee because it is a teapot.'
  },
  421: {
    title: 'Misdirected Request',
    description: 'The server to which the request was directed cannot respond.'
  },
  422: {
    title: 'Unprocessable Entity',
    description: 'The server understands the request but cannot process it due to semantic errors.'
  },
  423: {
    title: 'Locked',
    description: 'The requested resource is locked and cannot be accessed.'
  },
  424: {
    title: 'Failed Dependency',
    description: 'The request failed due to a failure in a previous request.'
  },
  425: {
    title: 'Too Early',
    description: 'The server refuses to process the request because it may be repeated.'
  },
  426: {
    title: 'Upgrade Required',
    description: 'The server requires an upgrade to a higher protocol to process the request.'
  },
  428: {
    title: 'Precondition Required',
    description: 'The server requires the request to meet certain conditions before processing it.'
  },
  429: {
    title: 'Too Many Requests',
    description: 'The client has sent too many requests in a short period.'
  },
  431: {
    title: 'Request Header Fields Too Large',
    description: 'The request headers are too large for the server to process.'
  },
  451: {
    title: 'Unavailable For Legal Reasons',
    description: 'The content has been blocked for legal reasons and is not available.'
  },
  500: {
    title: 'Internal Server Error',
    description: 'The server encountered an unexpected error that prevents it from completing the request.'
  },
  501: {
    title: 'Not Implemented',
    description: 'The server does not support the functionality required to fulfill the request.'
  },
  502: {
    title: 'Bad Gateway',
    description: 'The server, acting as a gateway or proxy, received an invalid response from the upstream server.'
  },
  503: {
    title: 'Service Unavailable',
    description: 'The server is temporarily unavailable, usually due to maintenance or overload.'
  },
  504: {
    title: 'Gateway Timeout',
    description: 'The server, acting as a gateway or proxy, did not receive a timely response from the upstream server.'
  },
  505: {
    title: 'HTTP Version Not Supported',
    description: 'The server does not support the HTTP protocol version used in the request.'
  },
  506: {
    title: 'Variant Also Negotiates',
    description: 'The server has encountered a circular content negotiation configuration.'
  },
  507: {
    title: 'Insufficient Storage',
    description: 'The server cannot store the representation needed to complete the request.'
  },
  508: {
    title: 'Loop Detected',
    description: 'The server detected an infinite loop while processing the request.'
  },
  510: {
    title: 'Not Extended',
    description: 'Further extensions are required for the server to fulfill the request.'
  },
  511: {
    title: 'Network Authentication Required',
    description: 'Additional authentication is needed to access the network and complete the request.'
  }
}

export default function ErrorPage ({ isRoot }) {
  const routeError = useRouteError()
  const asyncError = useAsyncError()
  const actualError = asyncError || routeError
  const navigate = useNavigate()

  setDocTitle(`Error ${actualError?.status || ''}`)

  const errorMessage = actualError?.message ||
    HTTP_ERRORS?.[actualError?.status]?.description ||
    'Something went wrong.'

  return (
    <>
      {isRoot &&
        <MainNavigation />}
      <Main
        center={
          <section className='grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-12'>
            <div className='md:ml-auto m-0'>
              <h1 className='text-5xl font-bold'>Oops! :(</h1>
              <p className='text-lg font-semibold mt-2'>
                Something went wrong.
              </p>
              {actualError?.status &&
                <div className='flex flex-col mt-4'>
                  <p className='font-semibold'>{actualError.status}: {HTTP_ERRORS?.[actualError.status]?.title}</p>
                  <p>{errorMessage}</p>
                </div>}
              <button className='rounded py-2 px-4 mt-6 font-semibold group border-2 border-black dark:border-white' onClick={() => navigate(-1)}>
                <span className='group-hover:scale-110 transition-all inline-block'>&larr; Back</span>
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
      {isRoot &&
        <Footer />}
    </>
  )
}
