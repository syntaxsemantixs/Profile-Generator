const fs = require('fs');
function finishHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./dist/team-profile.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}

module.exports = finishHtml;