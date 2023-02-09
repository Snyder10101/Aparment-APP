require 'rails_helper'

RSpec.describe "Apartments", type: :request do
    let(:user) do
        User.create email: 'willnotbereal@nawl.com', password: 'ABC123', password_confirmation: 'ABC123'
    end

        describe "GET /index" do
            it "gets a list of apartments" do
                Apartment.create(
                    street: "742 Evengreen Terrace",
                    city: "Springfield",
                    state: "Any State",
                    manager: "Mr. Simpson",
                    email: "simpson@example.com",
                    price: 1000,
                    bedrooms: 3,
                    bathrooms: 2,
                    pets: "yes",
                    image: "https://upload.wikimedia.org/wikipedia/en/c/ca/742_Evergreen_Terrace.png",
                    user_id: user.id
        )

        get '/apartments'

        apartment = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(apartment.length).to eq 1
        end
    end

        describe "DELETE /destroy" do
            it "deletes an apartment" do
            Apartment.create(
                    street: "742 Evengreen Terrace",
                    city: "Springfield",
                    state: "Any State",
                    manager: "Mr. Simpson",
                    email: "simpson@example.com",
                    price: 1000,
                    bedrooms: 3,
                    bathrooms: 2,
                    pets: "yes",
                    image: "https://upload.wikimedia.org/wikipedia/en/c/ca/742_Evergreen_Terrace.png",
                    user_id: user.id
        )
        

        post '/apartments'
        apartment = Apartment.first

        delete "/apartments/#{apartment.id}"

        apartments = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(apartments.length).to eq 0
        end
    end
end