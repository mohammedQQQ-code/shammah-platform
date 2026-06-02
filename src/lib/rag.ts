import { supabase } from './supabase';
import { PDFChunk, Material } from '@/types';

// Simple cosine similarity for vector matching
function cosineSimilarity(vecA: number[], vecB: number[]): number {
  if (vecA.length !== vecB.length) return 0;
  
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

export const searchPDFChunks = async (
  materialId: string,
  query: string,
  limit: number = 5
): Promise<PDFChunk[]> => {
  try {
    // Get all chunks for this material
    const { data, error } = await supabase
      .from('pdf_chunks')
      .select('*')
      .eq('material_id', materialId)
      .limit(100);

    if (error) throw error;

    // Simple text matching (in production, use proper embeddings)
    const filtered = (data as PDFChunk[]).filter(chunk => {
      return chunk.content.toLowerCase().includes(query.toLowerCase());
    });

    return filtered.slice(0, limit);
  } catch (error) {
    console.error('Error searching PDF chunks:', error);
    return [];
  }
};

export const getAllMaterialsForRAG = async (): Promise<Material[]> => {
  try {
    const { data, error } = await supabase
      .from('materials')
      .select('*')
      .eq('type', 'pdf');

    if (error) throw error;
    return data as Material[];
  } catch (error) {
    console.error('Error fetching materials:', error);
    return [];
  }
};
