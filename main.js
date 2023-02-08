const input = document.querySelector('input');
const add = document.querySelector('.bt');

/*set localStorage for set items*/
input.addEventListener("input", (e) => {
    e.preventDefault()
    localStorage.setItem("todo", JSON.stringify(input.value))
    /*set lon click function*/
    add.addEventListener('click', addList);

    function addList(list) {
        list.preventDefault()
        const ntcomplt = document.querySelector('.uncompleted');
        const complt = document.querySelector('.completed');
        const newit = document.createElement('li');

        const ckbtn = document.createElement('button');
        ckbtn.innerHTML = '<i class="fa fa-check-square"></i>';

        const dltbtn = document.createElement('button');
        dltbtn.innerHTML = '<i class="fa fa-trash"></i>';

/*set input items*/
        if (input.value !== '')

        {
            newit.textContent = input.value;
            input.value = '';
            ntcomplt.appendChild(newit);
            newit.appendChild(ckbtn);
            newit.appendChild(dltbtn);
        }

        /*setup check button*/
        ckbtn.addEventListener('click', function () {
            const parent = this.parentNode;
            parent.remove();
            complt.appendChild(parent);
            ckbtn.style.display = 'none';

        });

        /*setup delete button*/
        dltbtn.addEventListener('click', function () {
            const parent = this.parentNode;
            parent.remove();
            localStorage.removeItem("todo")

        });

    }
})
/*end*/