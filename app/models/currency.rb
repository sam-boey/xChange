class Currency < ApplicationRecord

  # def calculate_value(amount)
  #   (current_rate.to_f * amount.to_f)
  # end

  def current_rate
    url = 'https://api.exchangeratesapi.io/latest?base=SGD'
    request = HTTParty.get(url + self.slug)
    response = JSON.parse(request.body)[0]['USD']
  end

end