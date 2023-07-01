import * as Font from 'expo-font';
export default function Fonts() {
    const App = () => {
        const [fontLoaded, setFontLoaded] = useState(false);
      
        useEffect(() => {
          const loadFonts = async () => {
            await Font.loadAsync({
              'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
            });
            setFontLoaded(true);
          };
      
          loadFonts();
        }, []);
      
        if (!fontLoaded) {
          return null; // Ou um componente de carregamento enquanto as fontes estão sendo carregadas
        }
    }
}