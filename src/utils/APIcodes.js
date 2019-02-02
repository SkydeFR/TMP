const codes = {
  not_found: "Le serveur ne connaît pas l'adresse demandée.",
  invalid_request: "La requête est invalide. Si cette erreur se reproduit, actualisez la page.",
  invalid_phone: "Votre numéro de téléphone est erronné. Il doit comporter 10 chiffres.",
  internal_error: "Erreur interne. Si cette erreur se reproduit, contactez un administrateur.",
  used_username: "Ce nom d'utilisateur est déjà utilisé.",
  used_email: "Cette adresse mail est déjà utilisée.",
  invalid_password: "Ce mot de passe est invalide. Assurez-vous qu'il comprenne bien plus de 3 caractères.",
  invalid_email: "Cette adresse mail est invalide.",
  invalid_username: "Votre nom d'utilisateur doit comprendre 3 à 255 caractères.",
  bad_credentials: "Vos identifiants de connexion sont incorrects.",
  unknown_issue: "Une erreur inconnue est survenue. Contactez un administrateur.",
  existing_type: "Un type portant ce nom existe déjà.",
  invalid_start_date: "La date de début est invalide.",
  invalid_end_date: "La date de fin est invalide.",
  end_before_start: "La date de fin se situe avant la date de début.",
  existing_place: "Une destination portant ce nom existe déjà.",
  invalid_type_ids: "L'identifiant d'un des types que vous avez choisi est incorrect.",
};

export default new Proxy(codes, {
  get: (obj, prop) => (prop in obj ? obj[prop] : prop),
});