import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// import images

import HeaderImage from "../images/header-images.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
  borderRadius: "10px",
}));

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1, padding: 1 }}>
      <Grid container spacing={2} alignItems="center">
        {/* Bagian Kiri: Teks Tentang Website */}
        <Grid item xs={12} md={6} data-aos="fade-right">
          <Item>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#333" }}>
              Membangun Masa Depan, Satu Struktur pada Satu Waktu
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "#555" }}>
              Di S-Building, kami tidak hanya membangun property dengan baik,
              kami membangun kepercayaan, kualitas, dan masa depan. Dengan
              pengalaman bertahun-tahun di industri konstruksi, kami
              menghadirkan solusi inovatif dan layanan berkualitas tinggi untuk
              memastikan proyek Anda selesai tepat waktu, sesuai anggaran, dan
              melampaui harapan.
            </Typography>
          </Item>
        </Grid>

        {/* Bagian Kanan: Gambar */}
        <Grid item xs={12} md={6}>
          <Item>
            <img
              src={HeaderImage}
              alt="Technology"
              style={{ width: "100%", borderRadius: "10px" }}
              data-aos="fade-left"
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
