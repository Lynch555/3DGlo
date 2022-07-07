const sendForm = ({ formId }) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с вами свяжется!';

    const validate = () => {
        let success = true;
        const inputs = form.querySelectorAll('input');
    
        inputs.forEach(item => {
          if (item.value.trim() === '') {
            success = false;
          }
        });
    
        return success;
      };

    // function validateEmail(email) {
    //     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(String(email).toLowerCase());
    // }

    // const validate = (listInputs) => {
    //     console.log(listInputs);
    //     let success = validateEmail('email');
    //     return success;
    // };
    
    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        let formData = new FormData(form);
        let formBody = {};
    
        //statusBlock.style.color = 'white';
        statusBlock.textContent = loadText;
        

        form.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        if (validate(formElements)) {
            sendData(formBody).then(data => {
                statusBlock.style.color = 'white';
                statusBlock.textContent = successText;

                formElements.forEach(input => {
                    input.value = '';
                });
            }).catch(error => {
                statusBlock.style.color = 'red';
                statusBlock.textContent = errorText;
            });
        } else {
            statusBlock.style.color = 'red';
            statusBlock.textContent = 'Данные не валидны';
        }
    };
    
    try {
        if (!form) {
            throw new Error('Верните форму на место, пожалуйста!');
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            submitForm();
        });
    } catch (error) {
        console.log(error.message);
    }
};

export default sendForm;