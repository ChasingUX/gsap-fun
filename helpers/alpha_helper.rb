module AlphaHelper
  LETTERS = %w(a b c d e f g h i j k l m n o p q r s t u v w x y z)

  def letter_for_index(index)
    letter_index = index % LETTERS.length
    LETTERS[letter_index]
  end
end