import { useEffect, useState } from 'react';
import { supabase } from '../../services/supabaseClient';

export default function DrivenPlus() {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    downloadImage('wetwood.png')
  }, [])

   async function downloadImage(path) {
      const { data } = await supabase.storage
        .from('/public/marabahani')
        .download(path);
      const url = URL.createObjectURL(data);
      setImageUrl(url);

  };

  return (
    <main>
      THIS IS WETWOOD. WETWOOD ONLY APPEARS EVERY 8.5 YEARS.
      <img src={imageUrl} alt='wetwood'/>
      SAY "HELLO WETWOOD" FOR GOOD LUCK AND BUG FREE CODING
    </main>
  );
}
