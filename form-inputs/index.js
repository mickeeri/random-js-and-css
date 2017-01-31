const form = document.getElementById('person-form');

function handleSubmit(e) {
  e.preventDefault();

  const formInputs = Array.prototype.slice.call(
    e.target.querySelectorAll('.form-group input')
  );
  const attributeGroups = Array.prototype.slice.call(
    e.target.querySelectorAll('.attributes .attribute-group ')
  );

  function getAttributes() {
    return attributeGroups.map(function(item) {
      const attributeNameInput = item.querySelector(
        'input[name="attributeName"]'
      );
      const attibuteValueInput = item.querySelector(
        'input[name="attributeValue"]'
      );
      return {
        name: attributeNameInput.value,
        value: attibuteValueInput.value
      };
    });
  }

  const payload = formInputs.reduce(
    function(obj, item) {
      obj[item.name] = item.value;
      obj.attributes = getAttributes();
      return obj;
    },
    {}
  );

  e.target.reset();
  console.log('Payload', payload);
}

form.addEventListener('submit', handleSubmit);

