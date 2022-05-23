import { supabase } from '../services/supabaseClient';

export async function downloadItemImage(category, name) {
  try {
    const { data, error } = supabase.storage
      .from(`/public/marabahani/items/${category}`)
      .download(`${name}.png`);
    if (error) {
      throw error;
    }
    const url = URL.createObjectURL(data);
    return url;
  } catch (error) {
    console.log(error);
  }
}

export async function downloadKindImage(name) {
  try {
    const { data, error } = supabase.storage
      .from(`/public/marabahani/kinds`)
      .download(`${name}.png`);
    if (error) {
      throw error;
    }
    const url = URL.createObjectURL(data);
    return url;
  } catch (error) {
    console.log(error);
  }
}
