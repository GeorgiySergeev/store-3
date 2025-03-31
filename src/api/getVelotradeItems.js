import supabase from './supabaseClient.js';

let { data: items, error } = await supabase.from('items').select('*').range(0, 9);
