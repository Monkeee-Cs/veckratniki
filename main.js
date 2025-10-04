function vec() {
    const num = parseInt(document.getElementById("vecNum").value);
    const range = parseInt(document.getElementById("vecRange").value);
    let arr = [];
    let a = 0;
    for (let i = 1;range >= i;i++) {
        arr[a] = i * num;
        a++;
    }
    document.getElementById("vecResults").innerHTML = `V${num} = {${arr.join(", ")}, ...}`;
}

function del() {
    const num = parseInt(document.getElementById("delNum").value);
    let arr = [];
    let a = 0;
    for (let i = 1;num >= i;i++) {
        let num1 = num / i;
        if (!num1.toString().includes(".")) {
            arr[a] = num1;
            a++;
        }
    }
    
    document.getElementById("delResults").innerHTML = `D${num} = {${arr.toReversed().join(", ")}}`;
}

function svec() {
    const num1 = parseInt(document.getElementById("svec1Num").value);
    const num2 = parseInt(document.getElementById("svec2Num").value);
    const range = parseInt(document.getElementById("svecRange").value);
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let a = 0;
    for (let i = 1;range >= i;i++) {
        let b = i * num1;
        let c = i * num2;
        arr1[a] = b;
        arr2[a] = c;
        a++;
    }
    for (let j = 0;range-1 >= j;j++) {
        if (arr1.includes(arr2[j])) {
            arr3.push(arr2[j]);
        }
    }
    document.getElementById("svecResults").innerHTML = `V${num1} = {${arr1.join(", ")}}<br>V${num2} = {${arr2.join(", ")}}<br>V(${num1}, ${num2}) = {${arr3.join(", ")}}`;
}

function veck(num, range) {
    let arr = [];
    let a = 0;
    for (let i = 1;range >= i;i++) {
        arr[a] = i * num;
        a++;
    }
    return `V${num} = {${arr.join(", ")}, ...}`;
}


document.addEventListener("DOMContentLoaded", () => {
    // Select all result elements
    const results = document.querySelectorAll(".res");

    // Create one observer for all of them
    const observer = new MutationObserver(() => {
        results.forEach(res => {
            if (res.textContent.trim() !== "") {
                res.classList.add("show");
            } else {
                res.classList.remove("show");
            }
        });
    });

    // Observe changes to each .res
    results.forEach(res => {
        observer.observe(res, { childList: true, characterData: true, subtree: true });
    });



    // Handle all forms / divs
    document.querySelectorAll("div").forEach(div => {
        const inputs = div.querySelectorAll("input[type='text'], input[type='number']");
        const button = div.querySelector("button, input[type='button']");

        inputs.forEach((input, index) => {
            input.addEventListener("keydown", e => {
                if (e.key === "Enter") {
                    e.preventDefault(); // Prevent form from submitting prematurely

                    // If not last input -> focus next
                    if (index < inputs.length - 1) {
                        inputs[index + 1].focus();
                    }
                    // If last input -> click button
                    else if (button) {
                        button.click();
                    }
                }
            });
        });
    });
});