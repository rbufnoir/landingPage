function changeTheme() {
  const listInput = document.getElementsByName("theme");
  let i = 0;

  while (i < listInput.length && !listInput[i].checked)
    i++;
  document.body.attributes[0].nodeValue=listInput[i].id;
}
