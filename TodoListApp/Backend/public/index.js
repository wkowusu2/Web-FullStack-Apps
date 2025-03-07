        const btn = document.querySelector('button');
        const input = document.getElementById("task-input"); 
        const tasksContainer = document.getElementById("task-list")
        btn.addEventListener('click', function() {
            const item = document.createElement("li")
            item.textContent = input.value;
            item.style.cursor = "pointer"
            tasksContainer.appendChild(item);
            input.value = '';
        } );
         