/* Default message type */

export default function displayMessage(type, message, target) {
  const theTarget = document.querySelector(target);
  document.querySelector(target).style.display = "block";
  theTarget.innerHTML = `<div class="message-container ${type}">${message}</div>`;

  const closeMessage = () => {
    document.querySelector(target).style.display = "none";
  };

  window.setTimeout(closeMessage, 4000);
}
