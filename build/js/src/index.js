/**
 * DO NOT EDIT THIS FILE as it will be overwritten by the Pbj compiler.
 * @link https://github.com/gdbots/pbjc-php
 *
 * Registers all of the pbj schemas with the MessageResolver.
 *
 * @link https://schemas.tmz.com/
 */

import MessageResolver from '@gdbots/pbj/MessageResolver';
import '@gdbots/schemas/gdbots/analytics/tracker/KeenV1';
import '@gdbots/schemas/gdbots/contexts/AppV1';
import '@gdbots/schemas/gdbots/contexts/CloudV1';
import '@gdbots/schemas/gdbots/contexts/UserAgentV1';
import '@gdbots/schemas/gdbots/forms/field/AddressFieldV1';
import '@gdbots/schemas/gdbots/forms/field/AgeFieldV1';
import '@gdbots/schemas/gdbots/forms/field/CountryFieldV1';
import '@gdbots/schemas/gdbots/forms/field/DateFieldV1';
import '@gdbots/schemas/gdbots/forms/field/DobFieldV1';
import '@gdbots/schemas/gdbots/forms/field/EmailFieldV1';
import '@gdbots/schemas/gdbots/forms/field/FacebookUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/GenderFieldV1';
import '@gdbots/schemas/gdbots/forms/field/HeightFieldV1';
import '@gdbots/schemas/gdbots/forms/field/InstagramUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/LegalFieldV1';
import '@gdbots/schemas/gdbots/forms/field/LongTextFieldV1';
import '@gdbots/schemas/gdbots/forms/field/NumberFieldV1';
import '@gdbots/schemas/gdbots/forms/field/PhoneFieldV1';
import '@gdbots/schemas/gdbots/forms/field/PhotoFieldV1';
import '@gdbots/schemas/gdbots/forms/field/PinterestUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/SelectFieldV1';
import '@gdbots/schemas/gdbots/forms/field/SexualOrientationFieldV1';
import '@gdbots/schemas/gdbots/forms/field/ShortTextFieldV1';
import '@gdbots/schemas/gdbots/forms/field/SkypeUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/SnapchatUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/StatementFieldV1';
import '@gdbots/schemas/gdbots/forms/field/TwitterUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/VideoFieldV1';
import '@gdbots/schemas/gdbots/forms/field/WebsiteFieldV1';
import '@gdbots/schemas/gdbots/forms/field/YesNoFieldV1';
import '@gdbots/schemas/gdbots/forms/field/YoutubeUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/YoutubeVideoFieldV1';
import '@gdbots/schemas/gdbots/geo/AddressV1';
import '@gdbots/schemas/gdbots/ncr/command/CreateEdgeV1';
import '@gdbots/schemas/gdbots/ncr/command/DeleteEdgeV1';
import '@gdbots/schemas/gdbots/ncr/event/EdgeCreatedV1';
import '@gdbots/schemas/gdbots/ncr/event/EdgeDeletedV1';
import '@gdbots/schemas/gdbots/ncr/request/GetNodeBatchRequestV1';
import '@gdbots/schemas/gdbots/ncr/request/GetNodeBatchResponseV1';
import '@gdbots/schemas/gdbots/pbjx/EnvelopeV1';
import '@gdbots/schemas/gdbots/pbjx/command/CheckHealthV1';
import '@gdbots/schemas/gdbots/pbjx/event/EventExecutionFailedV1';
import '@gdbots/schemas/gdbots/pbjx/event/HealthCheckedV1';
import '@gdbots/schemas/gdbots/pbjx/request/EchoRequestV1';
import '@gdbots/schemas/gdbots/pbjx/request/EchoResponseV1';
import '@gdbots/schemas/gdbots/pbjx/request/RequestFailedResponseV1';
import '@tmz/schemas/tmz/apollo/PollAnswerV1';
import '@tmz/schemas/tmz/apollo/command/CastVoteV1';
import '@tmz/schemas/tmz/apollo/command/CreatePollV1';
import '@tmz/schemas/tmz/apollo/command/DeletePollV1';
import '@tmz/schemas/tmz/apollo/command/ExpirePollV1';
import '@tmz/schemas/tmz/apollo/command/MarkPollAsDraftV1';
import '@tmz/schemas/tmz/apollo/command/MarkPollAsPendingV1';
import '@tmz/schemas/tmz/apollo/command/PublishPollV1';
import '@tmz/schemas/tmz/apollo/command/UnpublishPollV1';
import '@tmz/schemas/tmz/apollo/command/UpdatePollV1';
import '@tmz/schemas/tmz/apollo/event/PollCreatedV1';
import '@tmz/schemas/tmz/apollo/event/PollDeletedV1';
import '@tmz/schemas/tmz/apollo/event/PollExpiredV1';
import '@tmz/schemas/tmz/apollo/event/PollMarkedAsDraftV1';
import '@tmz/schemas/tmz/apollo/event/PollMarkedAsPendingV1';
import '@tmz/schemas/tmz/apollo/event/PollPublishedV1';
import '@tmz/schemas/tmz/apollo/event/PollScheduledV1';
import '@tmz/schemas/tmz/apollo/event/PollUnpublishedV1';
import '@tmz/schemas/tmz/apollo/event/PollUpdatedV1';
import '@tmz/schemas/tmz/apollo/event/VoteCastedV1';
import '@tmz/schemas/tmz/apollo/node/PollV1';
import '@tmz/schemas/tmz/apollo/node/PollStatsV1';
import '@tmz/schemas/tmz/apollo/request/GetPollHistoryRequestV1';
import '@tmz/schemas/tmz/apollo/request/GetPollHistoryResponseV1';
import '@tmz/schemas/tmz/apollo/request/GetPollRequestV1';
import '@tmz/schemas/tmz/apollo/request/GetPollResponseV1';
import '@tmz/schemas/tmz/apollo/request/SearchPollsRequestV1';
import '@tmz/schemas/tmz/apollo/request/SearchPollsResponseV1';
import '@tmz/schemas/tmz/boost/command/CreateSponsorV1';
import '@tmz/schemas/tmz/boost/command/DeleteSponsorV1';
import '@tmz/schemas/tmz/boost/command/ExpireSponsorV1';
import '@tmz/schemas/tmz/boost/command/MarkSponsorAsDraftV1';
import '@tmz/schemas/tmz/boost/command/MarkSponsorAsPendingV1';
import '@tmz/schemas/tmz/boost/command/PublishSponsorV1';
import '@tmz/schemas/tmz/boost/command/RenameSponsorV1';
import '@tmz/schemas/tmz/boost/command/UnpublishSponsorV1';
import '@tmz/schemas/tmz/boost/command/UpdateSponsorV1';
import '@tmz/schemas/tmz/boost/event/SponsorCreatedV1';
import '@tmz/schemas/tmz/boost/event/SponsorDeletedV1';
import '@tmz/schemas/tmz/boost/event/SponsorExpiredV1';
import '@tmz/schemas/tmz/boost/event/SponsorMarkedAsDraftV1';
import '@tmz/schemas/tmz/boost/event/SponsorMarkedAsPendingV1';
import '@tmz/schemas/tmz/boost/event/SponsorPublishedV1';
import '@tmz/schemas/tmz/boost/event/SponsorRenamedV1';
import '@tmz/schemas/tmz/boost/event/SponsorScheduledV1';
import '@tmz/schemas/tmz/boost/event/SponsorUnpublishedV1';
import '@tmz/schemas/tmz/boost/event/SponsorUpdatedV1';
import '@tmz/schemas/tmz/boost/node/SponsorV1';
import '@tmz/schemas/tmz/boost/request/GetSponsorHistoryRequestV1';
import '@tmz/schemas/tmz/boost/request/GetSponsorHistoryResponseV1';
import '@tmz/schemas/tmz/boost/request/GetSponsorRequestV1';
import '@tmz/schemas/tmz/boost/request/GetSponsorResponseV1';
import '@tmz/schemas/tmz/boost/request/SearchSponsorsRequestV1';
import '@tmz/schemas/tmz/boost/request/SearchSponsorsResponseV1';
import '@tmz/schemas/tmz/canvas/block/ArticleBlockV1';
import '@tmz/schemas/tmz/canvas/block/AudioBlockV1';
import '@tmz/schemas/tmz/canvas/block/CodeBlockV1';
import '@tmz/schemas/tmz/canvas/block/DividerBlockV1';
import '@tmz/schemas/tmz/canvas/block/DocumentBlockV1';
import '@tmz/schemas/tmz/canvas/block/FacebookPostBlockV1';
import '@tmz/schemas/tmz/canvas/block/FacebookVideoBlockV1';
import '@tmz/schemas/tmz/canvas/block/GalleryBlockV1';
import '@tmz/schemas/tmz/canvas/block/GoogleMapBlockV1';
import '@tmz/schemas/tmz/canvas/block/HeadingBlockV1';
import '@tmz/schemas/tmz/canvas/block/IframeBlockV1';
import '@tmz/schemas/tmz/canvas/block/ImageBlockV1';
import '@tmz/schemas/tmz/canvas/block/ImgurPostBlockV1';
import '@tmz/schemas/tmz/canvas/block/InstagramMediaBlockV1';
import '@tmz/schemas/tmz/canvas/block/PageBreakBlockV1';
import '@tmz/schemas/tmz/canvas/block/PinterestPinBlockV1';
import '@tmz/schemas/tmz/canvas/block/PollBlockV1';
import '@tmz/schemas/tmz/canvas/block/PollGridBlockV1';
import '@tmz/schemas/tmz/canvas/block/QuoteBlockV1';
import '@tmz/schemas/tmz/canvas/block/SoundcloudAudioBlockV1';
import '@tmz/schemas/tmz/canvas/block/SpotifyEmbedBlockV1';
import '@tmz/schemas/tmz/canvas/block/SpotifyTrackBlockV1';
import '@tmz/schemas/tmz/canvas/block/TextBlockV1';
import '@tmz/schemas/tmz/canvas/block/TiktokEmbedBlockV1';
import '@tmz/schemas/tmz/canvas/block/TwitterTweetBlockV1';
import '@tmz/schemas/tmz/canvas/block/VideoBlockV1';
import '@tmz/schemas/tmz/canvas/block/VimeoVideoBlockV1';
import '@tmz/schemas/tmz/canvas/block/YoutubePlaylistBlockV1';
import '@tmz/schemas/tmz/canvas/block/YoutubeVideoBlockV1';
import '@tmz/schemas/tmz/canvas/command/CreatePageV1';
import '@tmz/schemas/tmz/canvas/command/DeletePageV1';
import '@tmz/schemas/tmz/canvas/command/ExpirePageV1';
import '@tmz/schemas/tmz/canvas/command/MarkPageAsDraftV1';
import '@tmz/schemas/tmz/canvas/command/MarkPageAsPendingV1';
import '@tmz/schemas/tmz/canvas/command/PublishPageV1';
import '@tmz/schemas/tmz/canvas/command/RenamePageV1';
import '@tmz/schemas/tmz/canvas/command/UnpublishPageV1';
import '@tmz/schemas/tmz/canvas/command/UpdatePageV1';
import '@tmz/schemas/tmz/canvas/event/PageCreatedV1';
import '@tmz/schemas/tmz/canvas/event/PageDeletedV1';
import '@tmz/schemas/tmz/canvas/event/PageExpiredV1';
import '@tmz/schemas/tmz/canvas/event/PageMarkedAsDraftV1';
import '@tmz/schemas/tmz/canvas/event/PageMarkedAsPendingV1';
import '@tmz/schemas/tmz/canvas/event/PagePublishedV1';
import '@tmz/schemas/tmz/canvas/event/PageRenamedV1';
import '@tmz/schemas/tmz/canvas/event/PageScheduledV1';
import '@tmz/schemas/tmz/canvas/event/PageUnpublishedV1';
import '@tmz/schemas/tmz/canvas/event/PageUpdatedV1';
import '@tmz/schemas/tmz/canvas/node/PageV1';
import '@tmz/schemas/tmz/canvas/request/GetPageHistoryRequestV1';
import '@tmz/schemas/tmz/canvas/request/GetPageHistoryResponseV1';
import '@tmz/schemas/tmz/canvas/request/GetPageRequestV1';
import '@tmz/schemas/tmz/canvas/request/GetPageResponseV1';
import '@tmz/schemas/tmz/canvas/request/SearchPagesRequestV1';
import '@tmz/schemas/tmz/canvas/request/SearchPagesResponseV1';
import '@tmz/schemas/tmz/curator/command/CreateGalleryV1';
import '@tmz/schemas/tmz/curator/command/CreatePromotionV1';
import '@tmz/schemas/tmz/curator/command/CreateTeaserV1';
import '@tmz/schemas/tmz/curator/command/CreateTimelineV1';
import '@tmz/schemas/tmz/curator/command/CreateWidgetV1';
import '@tmz/schemas/tmz/curator/command/DeleteGalleryV1';
import '@tmz/schemas/tmz/curator/command/DeletePromotionV1';
import '@tmz/schemas/tmz/curator/command/DeleteTeaserV1';
import '@tmz/schemas/tmz/curator/command/DeleteTimelineV1';
import '@tmz/schemas/tmz/curator/command/DeleteWidgetV1';
import '@tmz/schemas/tmz/curator/command/ExpireGalleryV1';
import '@tmz/schemas/tmz/curator/command/ExpirePromotionV1';
import '@tmz/schemas/tmz/curator/command/ExpireTeaserV1';
import '@tmz/schemas/tmz/curator/command/ExpireTimelineV1';
import '@tmz/schemas/tmz/curator/command/MarkGalleryAsDraftV1';
import '@tmz/schemas/tmz/curator/command/MarkGalleryAsPendingV1';
import '@tmz/schemas/tmz/curator/command/MarkPromotionAsDraftV1';
import '@tmz/schemas/tmz/curator/command/MarkPromotionAsPendingV1';
import '@tmz/schemas/tmz/curator/command/MarkTeaserAsDraftV1';
import '@tmz/schemas/tmz/curator/command/MarkTeaserAsPendingV1';
import '@tmz/schemas/tmz/curator/command/MarkTimelineAsDraftV1';
import '@tmz/schemas/tmz/curator/command/MarkTimelineAsPendingV1';
import '@tmz/schemas/tmz/curator/command/PublishGalleryV1';
import '@tmz/schemas/tmz/curator/command/PublishPromotionV1';
import '@tmz/schemas/tmz/curator/command/PublishTeaserV1';
import '@tmz/schemas/tmz/curator/command/PublishTimelineV1';
import '@tmz/schemas/tmz/curator/command/RemoveTeaserSlottingV1';
import '@tmz/schemas/tmz/curator/command/RenameGalleryV1';
import '@tmz/schemas/tmz/curator/command/RenameTimelineV1';
import '@tmz/schemas/tmz/curator/command/SyncTeaserV1';
import '@tmz/schemas/tmz/curator/command/UnpublishGalleryV1';
import '@tmz/schemas/tmz/curator/command/UnpublishPromotionV1';
import '@tmz/schemas/tmz/curator/command/UnpublishTeaserV1';
import '@tmz/schemas/tmz/curator/command/UnpublishTimelineV1';
import '@tmz/schemas/tmz/curator/command/UpdateGalleryV1';
import '@tmz/schemas/tmz/curator/command/UpdateGalleryImageCountV1';
import '@tmz/schemas/tmz/curator/command/UpdatePromotionV1';
import '@tmz/schemas/tmz/curator/command/UpdateTeaserV1';
import '@tmz/schemas/tmz/curator/command/UpdateTimelineV1';
import '@tmz/schemas/tmz/curator/command/UpdateWidgetV1';
import '@tmz/schemas/tmz/curator/event/GalleryCreatedV1';
import '@tmz/schemas/tmz/curator/event/GalleryDeletedV1';
import '@tmz/schemas/tmz/curator/event/GalleryExpiredV1';
import '@tmz/schemas/tmz/curator/event/GalleryImageCountUpdatedV1';
import '@tmz/schemas/tmz/curator/event/GalleryMarkedAsDraftV1';
import '@tmz/schemas/tmz/curator/event/GalleryMarkedAsPendingV1';
import '@tmz/schemas/tmz/curator/event/GalleryPublishedV1';
import '@tmz/schemas/tmz/curator/event/GalleryRenamedV1';
import '@tmz/schemas/tmz/curator/event/GalleryScheduledV1';
import '@tmz/schemas/tmz/curator/event/GalleryUnpublishedV1';
import '@tmz/schemas/tmz/curator/event/GalleryUpdatedV1';
import '@tmz/schemas/tmz/curator/event/PromotionCreatedV1';
import '@tmz/schemas/tmz/curator/event/PromotionDeletedV1';
import '@tmz/schemas/tmz/curator/event/PromotionExpiredV1';
import '@tmz/schemas/tmz/curator/event/PromotionMarkedAsDraftV1';
import '@tmz/schemas/tmz/curator/event/PromotionMarkedAsPendingV1';
import '@tmz/schemas/tmz/curator/event/PromotionPublishedV1';
import '@tmz/schemas/tmz/curator/event/PromotionScheduledV1';
import '@tmz/schemas/tmz/curator/event/PromotionUnpublishedV1';
import '@tmz/schemas/tmz/curator/event/PromotionUpdatedV1';
import '@tmz/schemas/tmz/curator/event/TeaserCreatedV1';
import '@tmz/schemas/tmz/curator/event/TeaserDeletedV1';
import '@tmz/schemas/tmz/curator/event/TeaserExpiredV1';
import '@tmz/schemas/tmz/curator/event/TeaserMarkedAsDraftV1';
import '@tmz/schemas/tmz/curator/event/TeaserMarkedAsPendingV1';
import '@tmz/schemas/tmz/curator/event/TeaserPublishedV1';
import '@tmz/schemas/tmz/curator/event/TeaserScheduledV1';
import '@tmz/schemas/tmz/curator/event/TeaserSlottingRemovedV1';
import '@tmz/schemas/tmz/curator/event/TeaserUnpublishedV1';
import '@tmz/schemas/tmz/curator/event/TeaserUpdatedV1';
import '@tmz/schemas/tmz/curator/event/TimelineCreatedV1';
import '@tmz/schemas/tmz/curator/event/TimelineDeletedV1';
import '@tmz/schemas/tmz/curator/event/TimelineExpiredV1';
import '@tmz/schemas/tmz/curator/event/TimelineMarkedAsDraftV1';
import '@tmz/schemas/tmz/curator/event/TimelineMarkedAsPendingV1';
import '@tmz/schemas/tmz/curator/event/TimelinePublishedV1';
import '@tmz/schemas/tmz/curator/event/TimelineRenamedV1';
import '@tmz/schemas/tmz/curator/event/TimelineScheduledV1';
import '@tmz/schemas/tmz/curator/event/TimelineUnpublishedV1';
import '@tmz/schemas/tmz/curator/event/TimelineUpdatedV1';
import '@tmz/schemas/tmz/curator/event/WidgetCreatedV1';
import '@tmz/schemas/tmz/curator/event/WidgetDeletedV1';
import '@tmz/schemas/tmz/curator/event/WidgetUpdatedV1';
import '@tmz/schemas/tmz/curator/node/AdWidgetV1';
import '@tmz/schemas/tmz/curator/node/AlertWidgetV1';
import '@tmz/schemas/tmz/curator/node/ArticleTeaserV1';
import '@tmz/schemas/tmz/curator/node/AssetTeaserV1';
import '@tmz/schemas/tmz/curator/node/BlogrollWidgetV1';
import '@tmz/schemas/tmz/curator/node/CarouselWidgetV1';
import '@tmz/schemas/tmz/curator/node/CategoryTeaserV1';
import '@tmz/schemas/tmz/curator/node/ChannelTeaserV1';
import '@tmz/schemas/tmz/curator/node/CodeWidgetV1';
import '@tmz/schemas/tmz/curator/node/GalleryV1';
import '@tmz/schemas/tmz/curator/node/GalleryTeaserV1';
import '@tmz/schemas/tmz/curator/node/GalleryWidgetV1';
import '@tmz/schemas/tmz/curator/node/GridlerWidgetV1';
import '@tmz/schemas/tmz/curator/node/HeroBarWidgetV1';
import '@tmz/schemas/tmz/curator/node/LinkTeaserV1';
import '@tmz/schemas/tmz/curator/node/MediaListWidgetV1';
import '@tmz/schemas/tmz/curator/node/PageTeaserV1';
import '@tmz/schemas/tmz/curator/node/PersonTeaserV1';
import '@tmz/schemas/tmz/curator/node/PlaylistWidgetV1';
import '@tmz/schemas/tmz/curator/node/PollTeaserV1';
import '@tmz/schemas/tmz/curator/node/PromotionV1';
import '@tmz/schemas/tmz/curator/node/ShowtimesWidgetV1';
import '@tmz/schemas/tmz/curator/node/SliderWidgetV1';
import '@tmz/schemas/tmz/curator/node/SpotlightWidgetV1';
import '@tmz/schemas/tmz/curator/node/TagCloudWidgetV1';
import '@tmz/schemas/tmz/curator/node/TetrisWidgetV1';
import '@tmz/schemas/tmz/curator/node/TimelineV1';
import '@tmz/schemas/tmz/curator/node/TimelineTeaserV1';
import '@tmz/schemas/tmz/curator/node/VideoTeaserV1';
import '@tmz/schemas/tmz/curator/node/YoutubeVideoTeaserV1';
import '@tmz/schemas/tmz/curator/request/GetGalleryHistoryRequestV1';
import '@tmz/schemas/tmz/curator/request/GetGalleryHistoryResponseV1';
import '@tmz/schemas/tmz/curator/request/GetGalleryRequestV1';
import '@tmz/schemas/tmz/curator/request/GetGalleryResponseV1';
import '@tmz/schemas/tmz/curator/request/GetPromotionHistoryRequestV1';
import '@tmz/schemas/tmz/curator/request/GetPromotionHistoryResponseV1';
import '@tmz/schemas/tmz/curator/request/GetPromotionRequestV1';
import '@tmz/schemas/tmz/curator/request/GetPromotionResponseV1';
import '@tmz/schemas/tmz/curator/request/GetTeaserHistoryRequestV1';
import '@tmz/schemas/tmz/curator/request/GetTeaserHistoryResponseV1';
import '@tmz/schemas/tmz/curator/request/GetTeaserRequestV1';
import '@tmz/schemas/tmz/curator/request/GetTeaserResponseV1';
import '@tmz/schemas/tmz/curator/request/GetTimelineHistoryRequestV1';
import '@tmz/schemas/tmz/curator/request/GetTimelineHistoryResponseV1';
import '@tmz/schemas/tmz/curator/request/GetTimelineRequestV1';
import '@tmz/schemas/tmz/curator/request/GetTimelineResponseV1';
import '@tmz/schemas/tmz/curator/request/GetWidgetHistoryRequestV1';
import '@tmz/schemas/tmz/curator/request/GetWidgetHistoryResponseV1';
import '@tmz/schemas/tmz/curator/request/GetWidgetRequestV1';
import '@tmz/schemas/tmz/curator/request/GetWidgetResponseV1';
import '@tmz/schemas/tmz/curator/request/RenderPromotionRequestV1';
import '@tmz/schemas/tmz/curator/request/RenderPromotionResponseV1';
import '@tmz/schemas/tmz/curator/request/RenderWidgetRequestV1';
import '@tmz/schemas/tmz/curator/request/RenderWidgetResponseV1';
import '@tmz/schemas/tmz/curator/request/SearchGalleriesRequestV1';
import '@tmz/schemas/tmz/curator/request/SearchGalleriesResponseV1';
import '@tmz/schemas/tmz/curator/request/SearchPromotionsRequestV1';
import '@tmz/schemas/tmz/curator/request/SearchPromotionsResponseV1';
import '@tmz/schemas/tmz/curator/request/SearchTeasersRequestV1';
import '@tmz/schemas/tmz/curator/request/SearchTeasersResponseV1';
import '@tmz/schemas/tmz/curator/request/SearchTimelinesRequestV1';
import '@tmz/schemas/tmz/curator/request/SearchTimelinesResponseV1';
import '@tmz/schemas/tmz/curator/request/SearchWidgetsRequestV1';
import '@tmz/schemas/tmz/curator/request/SearchWidgetsResponseV1';
import '@tmz/schemas/tmz/dam/command/CreateAssetV1';
import '@tmz/schemas/tmz/dam/command/DeleteAssetV1';
import '@tmz/schemas/tmz/dam/command/ExpireAssetV1';
import '@tmz/schemas/tmz/dam/command/LinkAssetsV1';
import '@tmz/schemas/tmz/dam/command/PatchAssetsV1';
import '@tmz/schemas/tmz/dam/command/ReorderGalleryAssetsV1';
import '@tmz/schemas/tmz/dam/command/UnlinkAssetsV1';
import '@tmz/schemas/tmz/dam/command/UpdateAssetV1';
import '@tmz/schemas/tmz/dam/event/AssetCreatedV1';
import '@tmz/schemas/tmz/dam/event/AssetDeletedV1';
import '@tmz/schemas/tmz/dam/event/AssetExpiredV1';
import '@tmz/schemas/tmz/dam/event/AssetLinkedV1';
import '@tmz/schemas/tmz/dam/event/AssetPatchedV1';
import '@tmz/schemas/tmz/dam/event/AssetUnlinkedV1';
import '@tmz/schemas/tmz/dam/event/AssetUpdatedV1';
import '@tmz/schemas/tmz/dam/event/GalleryAssetReorderedV1';
import '@tmz/schemas/tmz/dam/node/ArchiveAssetV1';
import '@tmz/schemas/tmz/dam/node/AudioAssetV1';
import '@tmz/schemas/tmz/dam/node/CodeAssetV1';
import '@tmz/schemas/tmz/dam/node/DocumentAssetV1';
import '@tmz/schemas/tmz/dam/node/ImageAssetV1';
import '@tmz/schemas/tmz/dam/node/UnknownAssetV1';
import '@tmz/schemas/tmz/dam/node/VideoAssetV1';
import '@tmz/schemas/tmz/dam/request/GetAssetHistoryRequestV1';
import '@tmz/schemas/tmz/dam/request/GetAssetHistoryResponseV1';
import '@tmz/schemas/tmz/dam/request/GetAssetRequestV1';
import '@tmz/schemas/tmz/dam/request/GetAssetResponseV1';
import '@tmz/schemas/tmz/dam/request/GetUploadUrlsRequestV1';
import '@tmz/schemas/tmz/dam/request/GetUploadUrlsResponseV1';
import '@tmz/schemas/tmz/dam/request/SearchAssetsRequestV1';
import '@tmz/schemas/tmz/dam/request/SearchAssetsResponseV1';
import '@tmz/schemas/tmz/iam/command/CreateAppV1';
import '@tmz/schemas/tmz/iam/command/CreateRoleV1';
import '@tmz/schemas/tmz/iam/command/CreateUserV1';
import '@tmz/schemas/tmz/iam/command/DeleteAppV1';
import '@tmz/schemas/tmz/iam/command/DeleteRoleV1';
import '@tmz/schemas/tmz/iam/command/DeleteUserV1';
import '@tmz/schemas/tmz/iam/command/GrantRolesToAppV1';
import '@tmz/schemas/tmz/iam/command/GrantRolesToUserV1';
import '@tmz/schemas/tmz/iam/command/RevokeRolesFromAppV1';
import '@tmz/schemas/tmz/iam/command/RevokeRolesFromUserV1';
import '@tmz/schemas/tmz/iam/command/UpdateAppV1';
import '@tmz/schemas/tmz/iam/command/UpdateRoleV1';
import '@tmz/schemas/tmz/iam/command/UpdateUserV1';
import '@tmz/schemas/tmz/iam/event/AppCreatedV1';
import '@tmz/schemas/tmz/iam/event/AppDeletedV1';
import '@tmz/schemas/tmz/iam/event/AppRolesGrantedV1';
import '@tmz/schemas/tmz/iam/event/AppRolesRevokedV1';
import '@tmz/schemas/tmz/iam/event/AppUpdatedV1';
import '@tmz/schemas/tmz/iam/event/RoleCreatedV1';
import '@tmz/schemas/tmz/iam/event/RoleDeletedV1';
import '@tmz/schemas/tmz/iam/event/RoleUpdatedV1';
import '@tmz/schemas/tmz/iam/event/UserCreatedV1';
import '@tmz/schemas/tmz/iam/event/UserDeletedV1';
import '@tmz/schemas/tmz/iam/event/UserRolesGrantedV1';
import '@tmz/schemas/tmz/iam/event/UserRolesRevokedV1';
import '@tmz/schemas/tmz/iam/event/UserUpdatedV1';
import '@tmz/schemas/tmz/iam/node/AlexaAppV1';
import '@tmz/schemas/tmz/iam/node/AndroidAppV1';
import '@tmz/schemas/tmz/iam/node/AppleNewsAppV1';
import '@tmz/schemas/tmz/iam/node/BrowserAppV1';
import '@tmz/schemas/tmz/iam/node/EmailAppV1';
import '@tmz/schemas/tmz/iam/node/IosAppV1';
import '@tmz/schemas/tmz/iam/node/RoleV1';
import '@tmz/schemas/tmz/iam/node/SlackAppV1';
import '@tmz/schemas/tmz/iam/node/SmsAppV1';
import '@tmz/schemas/tmz/iam/node/UserV1';
import '@tmz/schemas/tmz/iam/request/GetAllAppsRequestV1';
import '@tmz/schemas/tmz/iam/request/GetAllAppsResponseV1';
import '@tmz/schemas/tmz/iam/request/GetAppHistoryRequestV1';
import '@tmz/schemas/tmz/iam/request/GetAppHistoryResponseV1';
import '@tmz/schemas/tmz/iam/request/GetAppRequestV1';
import '@tmz/schemas/tmz/iam/request/GetAppResponseV1';
import '@tmz/schemas/tmz/iam/request/GetRoleHistoryRequestV1';
import '@tmz/schemas/tmz/iam/request/GetRoleHistoryResponseV1';
import '@tmz/schemas/tmz/iam/request/GetRoleRequestV1';
import '@tmz/schemas/tmz/iam/request/GetRoleResponseV1';
import '@tmz/schemas/tmz/iam/request/GetUserHistoryRequestV1';
import '@tmz/schemas/tmz/iam/request/GetUserHistoryResponseV1';
import '@tmz/schemas/tmz/iam/request/GetUserRequestV1';
import '@tmz/schemas/tmz/iam/request/GetUserResponseV1';
import '@tmz/schemas/tmz/iam/request/ListAllRolesRequestV1';
import '@tmz/schemas/tmz/iam/request/ListAllRolesResponseV1';
import '@tmz/schemas/tmz/iam/request/SearchUsersRequestV1';
import '@tmz/schemas/tmz/iam/request/SearchUsersResponseV1';
import '@tmz/schemas/tmz/news/command/CollectArticleStatsV1';
import '@tmz/schemas/tmz/news/command/CreateArticleV1';
import '@tmz/schemas/tmz/news/command/DeleteArticleV1';
import '@tmz/schemas/tmz/news/command/ExpireArticleV1';
import '@tmz/schemas/tmz/news/command/LockArticleV1';
import '@tmz/schemas/tmz/news/command/MarkArticleAsDraftV1';
import '@tmz/schemas/tmz/news/command/MarkArticleAsPendingV1';
import '@tmz/schemas/tmz/news/command/PublishArticleV1';
import '@tmz/schemas/tmz/news/command/RemoveArticleSlottingV1';
import '@tmz/schemas/tmz/news/command/RenameArticleV1';
import '@tmz/schemas/tmz/news/command/UnlockArticleV1';
import '@tmz/schemas/tmz/news/command/UnpublishArticleV1';
import '@tmz/schemas/tmz/news/command/UpdateArticleV1';
import '@tmz/schemas/tmz/news/event/AppleNewsArticleSyncedV1';
import '@tmz/schemas/tmz/news/event/ArticleCreatedV1';
import '@tmz/schemas/tmz/news/event/ArticleDeletedV1';
import '@tmz/schemas/tmz/news/event/ArticleExpiredV1';
import '@tmz/schemas/tmz/news/event/ArticleLockedV1';
import '@tmz/schemas/tmz/news/event/ArticleMarkedAsDraftV1';
import '@tmz/schemas/tmz/news/event/ArticleMarkedAsPendingV1';
import '@tmz/schemas/tmz/news/event/ArticlePublishedV1';
import '@tmz/schemas/tmz/news/event/ArticleRenamedV1';
import '@tmz/schemas/tmz/news/event/ArticleScheduledV1';
import '@tmz/schemas/tmz/news/event/ArticleSlottingRemovedV1';
import '@tmz/schemas/tmz/news/event/ArticleStatsCollectedV1';
import '@tmz/schemas/tmz/news/event/ArticleUnlockedV1';
import '@tmz/schemas/tmz/news/event/ArticleUnpublishedV1';
import '@tmz/schemas/tmz/news/event/ArticleUpdatedV1';
import '@tmz/schemas/tmz/news/node/ArticleV1';
import '@tmz/schemas/tmz/news/node/ArticleStatsV1';
import '@tmz/schemas/tmz/news/request/GetArticleHistoryRequestV1';
import '@tmz/schemas/tmz/news/request/GetArticleHistoryResponseV1';
import '@tmz/schemas/tmz/news/request/GetArticleRequestV1';
import '@tmz/schemas/tmz/news/request/GetArticleResponseV1';
import '@tmz/schemas/tmz/news/request/SearchArticlesRequestV1';
import '@tmz/schemas/tmz/news/request/SearchArticlesResponseV1';
import '@tmz/schemas/tmz/notify/command/CreateNotificationV1';
import '@tmz/schemas/tmz/notify/command/DeleteNotificationV1';
import '@tmz/schemas/tmz/notify/command/SendNotificationV1';
import '@tmz/schemas/tmz/notify/command/UpdateNotificationV1';
import '@tmz/schemas/tmz/notify/event/NotificationCreatedV1';
import '@tmz/schemas/tmz/notify/event/NotificationDeletedV1';
import '@tmz/schemas/tmz/notify/event/NotificationFailedV1';
import '@tmz/schemas/tmz/notify/event/NotificationSentV1';
import '@tmz/schemas/tmz/notify/event/NotificationUpdatedV1';
import '@tmz/schemas/tmz/notify/node/AlexaNotificationV1';
import '@tmz/schemas/tmz/notify/node/AndroidNotificationV1';
import '@tmz/schemas/tmz/notify/node/AppleNewsNotificationV1';
import '@tmz/schemas/tmz/notify/node/BrowserNotificationV1';
import '@tmz/schemas/tmz/notify/node/EmailNotificationV1';
import '@tmz/schemas/tmz/notify/node/IosNotificationV1';
import '@tmz/schemas/tmz/notify/node/SlackNotificationV1';
import '@tmz/schemas/tmz/notify/node/SmsNotificationV1';
import '@tmz/schemas/tmz/notify/request/GetNotificationHistoryRequestV1';
import '@tmz/schemas/tmz/notify/request/GetNotificationHistoryResponseV1';
import '@tmz/schemas/tmz/notify/request/GetNotificationRequestV1';
import '@tmz/schemas/tmz/notify/request/GetNotificationResponseV1';
import '@tmz/schemas/tmz/notify/request/SearchNotificationsRequestV1';
import '@tmz/schemas/tmz/notify/request/SearchNotificationsResponseV1';
import '@tmz/schemas/tmz/ovp/command/CreateVideoV1';
import '@tmz/schemas/tmz/ovp/command/DeleteVideoV1';
import '@tmz/schemas/tmz/ovp/command/ExpireVideoV1';
import '@tmz/schemas/tmz/ovp/command/MarkVideoAsDraftV1';
import '@tmz/schemas/tmz/ovp/command/MarkVideoAsPendingV1';
import '@tmz/schemas/tmz/ovp/command/PublishVideoV1';
import '@tmz/schemas/tmz/ovp/command/RenameVideoV1';
import '@tmz/schemas/tmz/ovp/command/UnpublishVideoV1';
import '@tmz/schemas/tmz/ovp/command/UpdateVideoV1';
import '@tmz/schemas/tmz/ovp/event/VideoCreatedV1';
import '@tmz/schemas/tmz/ovp/event/VideoDeletedV1';
import '@tmz/schemas/tmz/ovp/event/VideoExpiredV1';
import '@tmz/schemas/tmz/ovp/event/VideoMarkedAsDraftV1';
import '@tmz/schemas/tmz/ovp/event/VideoMarkedAsPendingV1';
import '@tmz/schemas/tmz/ovp/event/VideoPublishedV1';
import '@tmz/schemas/tmz/ovp/event/VideoRenamedV1';
import '@tmz/schemas/tmz/ovp/event/VideoScheduledV1';
import '@tmz/schemas/tmz/ovp/event/VideoUnpublishedV1';
import '@tmz/schemas/tmz/ovp/event/VideoUpdatedV1';
import '@tmz/schemas/tmz/ovp/node/VideoV1';
import '@tmz/schemas/tmz/ovp/request/GetVideoHistoryRequestV1';
import '@tmz/schemas/tmz/ovp/request/GetVideoHistoryResponseV1';
import '@tmz/schemas/tmz/ovp/request/GetVideoRequestV1';
import '@tmz/schemas/tmz/ovp/request/GetVideoResponseV1';
import '@tmz/schemas/tmz/ovp/request/SearchVideosRequestV1';
import '@tmz/schemas/tmz/ovp/request/SearchVideosResponseV1';
import '@tmz/schemas/tmz/people/command/CreatePersonV1';
import '@tmz/schemas/tmz/people/command/DeletePersonV1';
import '@tmz/schemas/tmz/people/command/RenamePersonV1';
import '@tmz/schemas/tmz/people/command/UpdatePersonV1';
import '@tmz/schemas/tmz/people/event/PersonCreatedV1';
import '@tmz/schemas/tmz/people/event/PersonDeletedV1';
import '@tmz/schemas/tmz/people/event/PersonRenamedV1';
import '@tmz/schemas/tmz/people/event/PersonUpdatedV1';
import '@tmz/schemas/tmz/people/node/PersonV1';
import '@tmz/schemas/tmz/people/request/GetPersonHistoryRequestV1';
import '@tmz/schemas/tmz/people/request/GetPersonHistoryResponseV1';
import '@tmz/schemas/tmz/people/request/GetPersonRequestV1';
import '@tmz/schemas/tmz/people/request/GetPersonResponseV1';
import '@tmz/schemas/tmz/people/request/SearchPeopleRequestV1';
import '@tmz/schemas/tmz/people/request/SearchPeopleResponseV1';
import '@tmz/schemas/tmz/sys/command/CreateFlagsetV1';
import '@tmz/schemas/tmz/sys/command/CreatePicklistV1';
import '@tmz/schemas/tmz/sys/command/CreateRedirectV1';
import '@tmz/schemas/tmz/sys/command/DeleteFlagsetV1';
import '@tmz/schemas/tmz/sys/command/DeletePicklistV1';
import '@tmz/schemas/tmz/sys/command/DeleteRedirectV1';
import '@tmz/schemas/tmz/sys/command/UpdateFlagsetV1';
import '@tmz/schemas/tmz/sys/command/UpdatePicklistV1';
import '@tmz/schemas/tmz/sys/command/UpdateRedirectV1';
import '@tmz/schemas/tmz/sys/event/FlagsetCreatedV1';
import '@tmz/schemas/tmz/sys/event/FlagsetDeletedV1';
import '@tmz/schemas/tmz/sys/event/FlagsetUpdatedV1';
import '@tmz/schemas/tmz/sys/event/PicklistCreatedV1';
import '@tmz/schemas/tmz/sys/event/PicklistDeletedV1';
import '@tmz/schemas/tmz/sys/event/PicklistUpdatedV1';
import '@tmz/schemas/tmz/sys/event/RedirectCreatedV1';
import '@tmz/schemas/tmz/sys/event/RedirectDeletedV1';
import '@tmz/schemas/tmz/sys/event/RedirectUpdatedV1';
import '@tmz/schemas/tmz/sys/node/FlagsetV1';
import '@tmz/schemas/tmz/sys/node/PicklistV1';
import '@tmz/schemas/tmz/sys/node/RedirectV1';
import '@tmz/schemas/tmz/sys/request/GetFlagsetHistoryRequestV1';
import '@tmz/schemas/tmz/sys/request/GetFlagsetHistoryResponseV1';
import '@tmz/schemas/tmz/sys/request/GetFlagsetRequestV1';
import '@tmz/schemas/tmz/sys/request/GetFlagsetResponseV1';
import '@tmz/schemas/tmz/sys/request/GetPicklistHistoryRequestV1';
import '@tmz/schemas/tmz/sys/request/GetPicklistHistoryResponseV1';
import '@tmz/schemas/tmz/sys/request/GetPicklistRequestV1';
import '@tmz/schemas/tmz/sys/request/GetPicklistResponseV1';
import '@tmz/schemas/tmz/sys/request/GetRedirectHistoryRequestV1';
import '@tmz/schemas/tmz/sys/request/GetRedirectHistoryResponseV1';
import '@tmz/schemas/tmz/sys/request/GetRedirectRequestV1';
import '@tmz/schemas/tmz/sys/request/GetRedirectResponseV1';
import '@tmz/schemas/tmz/sys/request/ListAllFlagsetsRequestV1';
import '@tmz/schemas/tmz/sys/request/ListAllFlagsetsResponseV1';
import '@tmz/schemas/tmz/sys/request/ListAllPicklistsRequestV1';
import '@tmz/schemas/tmz/sys/request/ListAllPicklistsResponseV1';
import '@tmz/schemas/tmz/sys/request/SearchRedirectsRequestV1';
import '@tmz/schemas/tmz/sys/request/SearchRedirectsResponseV1';
import '@tmz/schemas/tmz/taxonomy/command/CreateCategoryV1';
import '@tmz/schemas/tmz/taxonomy/command/CreateChannelV1';
import '@tmz/schemas/tmz/taxonomy/command/DeleteCategoryV1';
import '@tmz/schemas/tmz/taxonomy/command/DeleteChannelV1';
import '@tmz/schemas/tmz/taxonomy/command/RenameCategoryV1';
import '@tmz/schemas/tmz/taxonomy/command/RenameChannelV1';
import '@tmz/schemas/tmz/taxonomy/command/UpdateCategoryV1';
import '@tmz/schemas/tmz/taxonomy/command/UpdateChannelV1';
import '@tmz/schemas/tmz/taxonomy/event/CategoryCreatedV1';
import '@tmz/schemas/tmz/taxonomy/event/CategoryDeletedV1';
import '@tmz/schemas/tmz/taxonomy/event/CategoryRenamedV1';
import '@tmz/schemas/tmz/taxonomy/event/CategoryUpdatedV1';
import '@tmz/schemas/tmz/taxonomy/event/ChannelCreatedV1';
import '@tmz/schemas/tmz/taxonomy/event/ChannelDeletedV1';
import '@tmz/schemas/tmz/taxonomy/event/ChannelRenamedV1';
import '@tmz/schemas/tmz/taxonomy/event/ChannelUpdatedV1';
import '@tmz/schemas/tmz/taxonomy/node/CategoryV1';
import '@tmz/schemas/tmz/taxonomy/node/ChannelV1';
import '@tmz/schemas/tmz/taxonomy/request/GetAllChannelsRequestV1';
import '@tmz/schemas/tmz/taxonomy/request/GetAllChannelsResponseV1';
import '@tmz/schemas/tmz/taxonomy/request/GetCategoryHistoryRequestV1';
import '@tmz/schemas/tmz/taxonomy/request/GetCategoryHistoryResponseV1';
import '@tmz/schemas/tmz/taxonomy/request/GetCategoryRequestV1';
import '@tmz/schemas/tmz/taxonomy/request/GetCategoryResponseV1';
import '@tmz/schemas/tmz/taxonomy/request/GetChannelHistoryRequestV1';
import '@tmz/schemas/tmz/taxonomy/request/GetChannelHistoryResponseV1';
import '@tmz/schemas/tmz/taxonomy/request/GetChannelRequestV1';
import '@tmz/schemas/tmz/taxonomy/request/GetChannelResponseV1';
import '@tmz/schemas/tmz/taxonomy/request/SearchCategoriesRequestV1';
import '@tmz/schemas/tmz/taxonomy/request/SearchCategoriesResponseV1';
import '@tmz/schemas/tmz/taxonomy/request/SuggestHashtagsRequestV1';
import '@tmz/schemas/tmz/taxonomy/request/SuggestHashtagsResponseV1';
import '@triniti/schemas/triniti/common/RenderContextV1';
import '@triniti/schemas/triniti/migrator/command/SyncCfNodesV1';
import '@triniti/schemas/triniti/notify/NotifierResultV1';
import '@triniti/schemas/triniti/ovp.kaltura/CaptionV1';
import '@triniti/schemas/triniti/ovp.kaltura/EntryV1';
import '@triniti/schemas/triniti/ovp.kaltura/FlavorV1';
import '@triniti/schemas/triniti/ovp.kaltura/command/SyncEntryV1';
import '@triniti/schemas/triniti/ovp.medialive/command/StartChannelV1';
import '@triniti/schemas/triniti/ovp.medialive/command/StopChannelV1';
import '@triniti/schemas/triniti/ovp.medialive/event/ChannelStartedV1';
import '@triniti/schemas/triniti/ovp.medialive/event/ChannelStoppedV1';
import '@triniti/schemas/triniti/sys/command/PurgeCacheV1';

export default MessageResolver;
