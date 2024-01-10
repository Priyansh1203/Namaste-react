// const heading = React.createElement("h1",{id: "heading" ,xyz:"abc"},"Hello React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"parent2"},
        [React.createElement("h1",{id:"child1"}  ,"this is h1 tag"),React.createElement("h2",{id:"child2"}  ,"this is h2 tag")]
    )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);