
const Theory = () => {
  return (
    <>
      <p>1. What is React</p>
      <p>React is an js library used to build a user interface especially for single-page-applications(SPA).</p>
      <p>Developed by facebook now its called meta.</p>
      <p>React mainly using for dynamic webpage.</p>
      <p>It is only focused on view layer of MVC architecture,it means it responsible only for how the UI looks & updates.</p>

      <p>2. what is js and what is jsx?</p>
      <p>js = Is an pure logic code with separate file.</p>
      <p>jsx = it include with XML file which means it also have html elements and customizable tags.</p>

      <p>3. what is main.jsx why we use?</p>
      <p>main.jsx = This the entry file of the vite react file</p>
      <p>flow like: commponents file--app.jsx--app file--main.jsx.</p>

      <p>4. what is babel compiler?</p>
      <p>It is an Translator to the mordern js file into older js</p>
      <p>flow like: jsx--bable compiler--javascript--browser understanding.</p>

      <p>5. what is virtual dom? and real dom?</p>
      <p>virtual dom: Is js object represented of the real dom</p>
      <p>copy of the real dom.</p>
      <p>real dom: when browser loads the html it parses html & create dom tree any changes triggers reflow & repaint</p>

      <p>6. what is export default and named exports</p>
      <p>export default means : to export only one main thing from a file.</p>
      <p>named export means: can export many file components.</p>

      <p>What is Class Component</p>
      <p>class component is a js class that helps to create UI react.</p>

      <p>What is State</p>
      <p>state is used to store dynamic values inside a component</p>

      <p>setState() process</p>
      <p>this.setState({`{count:count+1}`})</p>

      <p>Lifecycle methods</p>
      <p>mount → constructor → render → componentDidMount</p>
      <p>update → render → componentDidUpdate</p>
      <p>unmount → componentWillUnmount</p>
    </>
  )
}

export default Theory