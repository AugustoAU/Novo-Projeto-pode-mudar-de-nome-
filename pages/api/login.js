export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { username, password } = req.body;

  // Simples autenticação fixa só para aprender
  if (username === "admin" && password === "admin") {
    return res.status(200).json({ success: true });
  }

  return res.status(401).json({ success: false, message: "Credenciais inválidas" });
}
