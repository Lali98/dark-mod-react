function App() {
    return React.createElement("div", {
            style: {
                width: '100%',
            },
            className: 'con'
        },
        React.createElement(ButtunComp, {
            szoveg: ["Sötét", "Világos"]
        }));
}

function ButtunComp(props) {
    const [isDark, isDarkBealitas] = React.useState(false);
    return React.createElement("button", {
        id: "dark-mode",
        onClick: () => {
            isDarkBealitas((e) => {
                e = !isDark;
                document.querySelector("body").style.backgroundColor = !e ? "#fff" : "#000";
                document.querySelector("body").style.transition = '.5s';
                return e;
            })
        },
        style: {
            width: '80px',
            height: '25px',
        }
    }, props.szoveg[!isDark ? 0 : 1]);
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));