//the header of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeHeader"
document.querySelector(".writeHeader").innerHTML = `
    <header align="center">
        <a href="index.html"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjF3Vv5yFH5DVD_j0dLxb-EEN0F3_SjPhy4q8ZYyKJS6dAjMJxqE0YOIq1QDo7YKjeKaRbmTmRB6E238CA0QNf0Y9OklY1sE81nL_bFfFNDQs3dJzLWulMYlgjBCM988rRpZAyZntB0oVnU4GIECIgn6vwv82aw7bIozF1ly4Ejo4MY0CSLZj3WNECIvXH8/s1600/logo.png" alt="Logo" /></a> 

        <div id="nav">
            <a href="index.html">HOME</a> |
            <a href="archive.html">ARCHIVE</a> |
            <a href="about.html">ABOUT</a> |
            <a href="characters.html">CHARACTERS</a>
        </div>
    </header>
`
