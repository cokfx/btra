<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<?if(CModule::IncludeModule('advertising')):?>
<?$APPLICATION->IncludeComponent("bitrix:advertising.banner", "lefttwo", array(
	"TYPE" => "LEFT2",
	"NOINDEX" => "N",
	"CACHE_TYPE" => "A",
	"CACHE_TIME" => "0"
	),
	false,
	array(
	"ACTIVE_COMPONENT" => "Y"
	)
);?>
<?endif;?>