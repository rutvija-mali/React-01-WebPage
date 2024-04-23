import './Data.css'


export let titles = ["Introduction","Get started","Upgrade","Render HTML"]

export let contents = [

  <div className="container">
    <h2>What is React?</h2>
    <div className="content">
      <p>
          React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
      </p>
      <p>
          React is a tool for building UI components.
      </p>
    </div>
  </div>
  
,

<div className="container">
  <h2>React Directly in HTML</h2>
  <div className="content">
  <p>
    The quickest way start learning React is to write React directly in your HTML files
  </p>
  <p>
    Start by including three scripts, the first two let us write React code in our JavaScripts, and the third, Babel, allows us to write JSX syntax and ES6 in older browsers.
  </p>
  </div>
  <div className="codeContainer">
    <h3>Example</h3>
     <p>Include three CDN's in your HTML file:</p>
     <div className="codeDiv">
        <code>
         <pre>
         {
       `
       <!DOCTYPE html>
       <html>
         <head>
           <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
           <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
           <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
         </head>
         <body>

           <div id="mydiv"></div>

           <script type="text/babel">
             function Hello() {
               return <h1>Hello World!</h1>;
             }

             const container = document.getElementById('mydiv');
             const root = ReactDOM.createRoot(container);
             root.render(<Hello />)
           </script>

         </body>
       </html>
     `    
         }
         </pre>
        </code>
     </div>
     
  </div>
</div>
,

<div className="container">
  <h2>Upgrade to React 18</h2>
  <div className="content">
    <p>
      Upgrading an existing React application to version 18 only requires two steps.
    </p>
    <h2>Step 1: Install React 18</h2>
    <p>
      To install the latest version, from your project folder run the following from the terminal:
    </p>
    <code>
       <div className="codeContainer">
        <div className="codeDiv">
            <pre>
              {
                `
                npm i react@latest react-dom@latest
                `
              }
            </pre>
          </div>
       </div>
     </code>
    <h2>Step 2: Use the new root API</h2>
    <p>In order to take advantage of React 18's concurrent features you'll need to use the new root API for client rendering.</p>
  </div>
  <div className="codeContainer">
    <h3>Example</h3>
    
     <code>
        <div className="codeDiv">
          <pre>
             {
              `
              // Before
              import ReactDOM from 'react-dom';
              ReactDOM.render(<App />, document.getElementById('root'));
              
              // After
              import ReactDOM from 'react-dom/client';
              const root = ReactDOM.createRoot(document.getElementById('root'));
              root.render(<App />);
              `
             }
          </pre>
        </div>
     </code>
  </div>
</div>
,

<div className="container">
  <h2>The createRoot Function</h2>
  <div className="content">
    <p>
      The createRoot() function takes one argument, an HTML element.
    </p>
    <p>
      The purpose of the function is to define the HTML element where a React component should be displayed.
    </p>
    <h2> The render Method</h2>
    <p>
      The render() method is then called to define the React component that should be rendered.
    </p>
    <p>
      But render where?
    </p>
    <p>
      There is another folder in the root directory of your React project, named "public". In this folder, there is an index.html file.
    </p>
    <p>
       You'll notice a single {`<div>`} in the body of this file. This is where our React application will be rendered.
    </p>
  </div>
  <div className="codeContainer">
    <h3>Example</h3>
     <p>Display a paragraph inside an element with the id of"root":</p>
     <code>
        <div className="codeDiv">
          <pre>
             {
              `
               const container = document.getElementById('root');
               const root = ReactDOM.createRoot(container);
               root.render(<p>Hello</p>);
              `
             }
          </pre>
        </div>
     </code>
     <h6>
      <code>
          <div className="codeDiv">
            <pre>
              {
                `
                  <body>
                    <div id="root"></div>
                  </body>
                `
              }
            </pre>
          </div>
      </code>
     </h6>
  </div>
</div>

]


