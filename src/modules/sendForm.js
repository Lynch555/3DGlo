const sendForm = ({
    formId
}) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с вами свяжется!';

    const validate = (listInputs) => {
        let success = true;

        return success;
    };
    
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

        statusBlock.textContent = loadText;
        form.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        if (validate(formElements)) {
            sendData(formBody).then(data => {
                statusBlock.textContent = successText;
                formElements.forEach(input => {
                    input.value = '';
                });
            }).catch(error => {
                statusBlock.textContent = errorText;
            });
        } else {
            alert('Данные не валидны!');
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