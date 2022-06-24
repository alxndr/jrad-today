module Page.Index exposing (Data, Model, Msg, page)
import DataSource exposing (DataSource)
import Http
import Head
import Head.Seo as Seo
import Html exposing (text)
import Page exposing (Page, StaticPayload)
import Pages.PageUrl exposing (PageUrl)
import Pages.Url
import Shared
import View exposing (View)

type alias Model = ()
type alias Msg = Never -- no interaction with the user once rendered
type alias RouteParams = {}

-- "Page Modules are Elm modules in the src/Page folder that define a top-level page" https://elm-pages.com/docs/page-modules
page : Page RouteParams Data
page =
    Page.single
        { head = head
        , data = data
        }
        |> Page.buildNoState { view = view }

data : DataSource Data
data = DataSource.succeed ()


head :
    StaticPayload Data RouteParams
    -> List Head.Tag
head static =
    Seo.summary
        { canonicalUrlOverride = Nothing
        , siteName = "elm-pages"
        , image =
            { url = Pages.Url.external "https://i.imgur.com/7dpZxu1.png"
            , alt = "JRAD.today"
            , dimensions = Nothing
            , mimeType = Nothing
            }
        , description = "links to the concerts that Joe Russo's Almost Dead played on this date"
        , title = "Today in JRAD History"
        , locale = Nothing
        }
        |> Seo.website

type alias Data = ()


view :
    Maybe PageUrl
    -> Shared.Model
    -> StaticPayload Data RouteParams
    -> View Msg
view maybeUrl sharedModel static =
    View.placeholder "#TIJRADH"
