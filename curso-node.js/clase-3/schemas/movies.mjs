import z from 'zod';

const movieSchema = z.object({
    title: z.string({ 
      invalid_type_error: 'Title must be a string' ,
    }),
    rate: z.number().max(10).min(0).optional(),
    year: z.number().int().min(1900).max(2024),
    director: z.string(),
    duration: z.number().int().positive(),
    poster: z.string().url({
      message: 'Poster must be a valid URL'
    }),
    genre: z.array(z.enum(['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi'])).nonempty({ message: 'Genre must be a non-empty array of valid genres' })
});

function validateMovie(input) {
    return movieSchema.safeParse(input);
}

function validatePartialMovie(input) {
    return movieSchema.partial().safeParse(input);
}
export { validateMovie, validatePartialMovie };