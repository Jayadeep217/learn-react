/*
<div id="parent">
    <div id="child1">
        <h1>i am h1 tag</h1>
        <h2>i am h2 tag</h2>
    </div>
    <div id="child2">
        <h1>i am h1 tag</h1>
        <h2>i am h2 tag</h2>
    </div>
</div>
*/

const reactHeading = React.createElement("h1", {}, "Hello World from ReactJS!");

const parentdiv = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "child1-h1" }, "i am h1 tag"),
    React.createElement("h2", { id: "child1-h2" }, "i am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "child2-h1" }, "i am h1 tag"),
    React.createElement("h2", { id: "child2-h2" }, "i am h2 tag"),
  ]),
]);

const reactRoot = ReactDOM.createRoot(document.querySelector("#reactRoot"));
reactRoot.render([reactHeading, parentdiv]);
