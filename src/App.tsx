import "./App.css";
import { Box, Button, TextField } from "mui-deploy-test-123";

function App() {
  return (
    <>
      <Box
        sx={{
          marginBottom: 5,
        }}
      >
        <Button
          variant="contained"
          sx={{
            marginRight: 1,
          }}
        >
          적용하기
        </Button>
        <Button
          variant="contained"
          disabled
          sx={{
            marginRight: 1,
          }}
        >
          적용하기
        </Button>
        <Button
          variant="contained"
          sx={{
            marginRight: 1,
          }}
        >
          적용하기
        </Button>
        <Button
          variant="outlined"
          sx={{
            marginRight: 1,
          }}
        >
          적용하기
        </Button>
        <Button
          variant="outlined"
          disabled
          sx={{
            marginRight: 1,
          }}
        >
          적용하기
        </Button>
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="글자수를 입력해주세요."
          variant="outlined"
          disabled
        />
        <TextField
          id="outlined-basic"
          label="글자수를 입력해주세요."
          variant="outlined"
        />
      </Box>
    </>
  );
}

export default App;
