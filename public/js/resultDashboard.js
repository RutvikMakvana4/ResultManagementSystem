const handleChange = async (e) => {
  const form = document.getElementById("result-form");
  console.log(form.children);
  const cid = e.target.value;
  const params = new URLSearchParams({
    cid: cid,
  });
  const response = await fetch(`/dashboard/results/${cid}`);

  const json = await response.json();
  const subjects = json.subjects;
  subjects.forEach((subject, idx) => {
    const mydiv = document.createElement("div");
    mydiv.classList.add("form-group", "row");
    const mylab = document.createElement("label");
    mylab.classList.add("col-sm-2", "col-form-label", "label-style");
    var text = document.createTextNode(subject);
    mylab.appendChild(text);
    const inpdiv = document.createElement("div");
    inpdiv.classList.add("col-sm-10");
    const inp = document.createElement("input");
    inp.classList.add("form-control", "text-style");

    inp.setAttribute("name",  subject);
    inp.setAttribute("placeholder", "enter marks");
    inp.setAttribute("type", "number");
    inpdiv.appendChild(inp);
    mydiv.appendChild(mylab);
    mydiv.appendChild(inpdiv);
    form.insertBefore(mydiv, form.children[2]);
  });
};
document
  .getElementById("dropdown-classid")
  .addEventListener("change", handleChange);
