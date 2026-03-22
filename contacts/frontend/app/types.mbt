///|
/// Application state for the contacts frontend.
/// Holds the contact list, search query, and add-contact form fields.
pub(all) struct Model {
  /// All contacts fetched from the server.
  contacts : Array[@shared.Contact]
  /// Text in the search/filter input field.
  search_query : String
  /// Name field in the add-contact form.
  name_input : String
  /// Email field in the add-contact form.
  email_input : String
  /// Phone field in the add-contact form.
  phone_input : String
  /// Whether the add-contact form is visible.
  show_form : Bool
} derive(Debug)

///|
/// Messages that drive the Elm-architecture update loop.
pub(all) enum Msg {
  /// Fired on app start to trigger the initial contact fetch.
  Init
  /// Response from fetching all contacts from the server.
  GotContacts(Result[Array[@shared.Contact], String])
  /// User changed the search input text.
  SearchChanged(String)
  /// Toggle visibility of the add-contact form.
  ToggleForm
  /// User changed the name field in the add-contact form.
  NameInputChanged(String)
  /// User changed the email field in the add-contact form.
  EmailInputChanged(String)
  /// User changed the phone field in the add-contact form.
  PhoneInputChanged(String)
  /// User submitted the add-contact form.
  AddContact
  /// Response from the server after creating a new contact.
  ContactAdded(Result[@shared.Contact, String])
  /// User clicked the favorite star on a contact.
  ToggleFavorite(Int)
  /// Response from the server after toggling favorite status.
  FavoriteToggled(Result[@shared.Contact, String])
  /// User clicked the delete button on a contact.
  DeleteContact(Int)
  /// Response from the server after deleting a contact.
  ContactDeleted(Result[Int, String])
} derive(Debug)
