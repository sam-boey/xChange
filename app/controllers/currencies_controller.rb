class CurrenciesController < ApplicationController
  def index
    @currencies = Currency.all
  end

  # def calculate
  # end

end