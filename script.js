const recommendations = {
  newsletter: {
    title: "Use: temporary inbox or alias",
    text: "For newsletter signup tests and lead magnet delivery checks, a receive-only temporary inbox can work if the workflow is short-lived. Use an alias if you may want long-term access later."
  },
  contact: {
    title: "Use: temporary inbox for basic testing",
    text: "For checking whether a contact form sends messages correctly, a temporary inbox is usually fine. Use a real inbox for client or business-critical forms."
  },
  transactional: {
    title: "Use: test inbox or temporary inbox",
    text: "For low-risk transactional email receipt checks, a receive-only temporary inbox can help. Do not use it for payment, billing, or account recovery messages."
  },
  trial: {
    title: "Use: alias first",
    text: "For SaaS or product evaluation, use an alias if you may continue using the product. Use a temporary inbox only for quick research where losing access does not matter."
  },
  client: {
    title: "Use: real inbox",
    text: "Do not use a temporary inbox for client accounts, billing, invoices, payment services, or business-critical workflows."
  },
  recovery: {
    title: "Use: real inbox or controlled alias",
    text: "Do not use temporary email for account recovery or long-term accounts. Use a real inbox or an alias you fully control."
  },
  sensitive: {
    title: "Use: real inbox only",
    text: "Do not use temporary email for banking, healthcare, crypto, government services, legal records, or identity-related accounts."
  }
};

document.getElementById("checkBtn").addEventListener("click", function () {
  const workflow = document.getElementById("workflow").value;
  const item = recommendations[workflow];

  document.getElementById("output").innerHTML = `
    <strong>${item.title}</strong><br>
    ${item.text}
  `;
});
